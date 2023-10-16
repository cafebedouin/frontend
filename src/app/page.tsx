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

const HomePage = () => {
  const [data, setData] = useState<{
    nextStart: number;
    curPrice: number;
    circulating: number;
    auctionList: Array<UpcomingAuctionType>;
  }>({ nextStart: 0, curPrice: 0, circulating: 0, auctionList: [] });

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
      const fetchInfo = fetch('https://api.auctioncoin.app/info').then(
        (res) => {
          if (!res.ok) {
            console.error(`HTTP error! status: ${res.status}`);

            return {
              nextStart: 0,
              curPrice: 0,
              circulating: 0,
              auctionList: [],
            };
          }

          return res.json();
        },
      );

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
              'aee8132a6602dd215dac8d1caf973581277614e267702a770f45d7ffe5234cba',
          }),
        },
      ).then((res) => {
        if (!res.ok) {
          console.error('Error fetching active auctions:', res.status);

          return { data: [], has_more: false };
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
          setData({
            nextStart: 0,
            curPrice: 0,
            circulating: 0,
            auctionList: [],
          });
          setActiveAuction({ data: [], has_more: false });
        });
    };

    fetchData().then(() => {});
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center gap-16 p-24">
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
