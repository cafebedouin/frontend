'use client';
import { useEffect, useState } from 'react';

import { Cards } from '@/app/Cards';
import { Hero } from '@/app/Hero';
import {
  UpcomingAuctions,
  ActiveAuctions,
  UpcomingAuctionType,
  ActiveAuction,
} from '@/components/Tables';

export type MainData = {
  nextStart: number;
  curPrice: number;
  circulating: number;
  auctionList: Array<UpcomingAuctionType>;
};

const HomePage = () => {
  const [data, setData] = useState<MainData>({
    nextStart: 0,
    curPrice: 0,
    circulating: 0,
    auctionList: [],
  });

  const [activeAuction, setActiveAuction] = useState<{
    data: Array<{
      id: string;
      endTime: number;
      price: number;
      tokenAmount: number;
    }>;
    has_more: boolean;
  }>({ data: [], has_more: false });

  useEffect(() => {
    const fetchData = async () => {
      const fetchInfo: Promise<MainData> = fetch(
        'https://api.auctioncoin.app/info',
      ).then((res) => {
        if (!res.ok) {
          throw Error(`HTTP error! status: ${res.status}`);
        }

        return res.json();
      });

      const fetchActiveAuctions = fetch(
        'https://ergoauctions.org/api/auctions/all/active?limit=-1&page=-1',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            sort: 'lb',
            artworkId:
              '52f4544ce8a420d484ece16f9b984d81c23e46971ef5e37c29382ac50f80d5bd',
          }),
        },
      ).then((res) => {
        if (!res.ok) {
          throw Error(`Error fetching active auctions: ${res.status}`);
        }

        return res.json();
      });

      Promise.all([fetchInfo, fetchActiveAuctions])
        .then(([data, activeAuctionData]) => {
          setData(data);
          setActiveAuction(activeAuctionData);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    };

    fetchData().then(() => {});

    const intervalId = setInterval(fetchData, 30000); // Call fetchData every 30 seconds

    return () => clearInterval(intervalId); // Clean up the interval on component unmount
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center gap-16 p-12 sm:p-24">
      <Hero />
      <Cards
        nextStart={data.nextStart}
        curPrice={data.curPrice}
        circulating={data.circulating}
      />
      <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2">
        <UpcomingAuctions
          auctionList={data?.auctionList}
          currentPrice={data?.curPrice}
        />
        <ActiveAuctions
          auctions={activeAuction?.data?.map<ActiveAuction>((auction) => {
            return {
              auctionId: auction?.id,
              endTime: auction?.endTime,
              price: auction?.price,
              numberOfToken: auction?.tokenAmount,
            };
          })}
        />
      </div>
    </main>
  );
};

export default HomePage;
