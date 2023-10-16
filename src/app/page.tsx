import { Card, CardContent } from '@mui/material';

import {
  UpcomingAuctions,
  ActiveAuctions,
  UpcomingAuctionType,
  ActiveAuction,
} from '@/components/Tables';

const HomePage = async () => {
  const res = await fetch('https://api.auctioncoin.app/info');
  const data: {
    nextStart: number;
    curPrice: number;
    circulating: number;
    auctionList: Array<UpcomingAuctionType>;
  } = await res.json();

  const activeAuctionRes = await fetch(
    'https://ergoauctions.org/api/auctions/all/active?limit=-1&page=-1',
    {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        sort: 'lb',
        artworkId:
          'aee8132a6602dd215dac8d1caf973581277614e267702a770f45d7ffe5234cba',
      }),
    },
  );
  const activeAuction: {
    data: Array<{
      id: string;
      endTime: number;
      price: number;
      tokenAmount: number;
    }>;
    has_more: boolean;
  } = await activeAuctionRes.json();

  return (
    <main className="flex min-h-screen flex-col items-center gap-16 p-24">
      <div className="mx-auto flex flex-col md:w-6/12">
        <h2 className="animate-pulse bg-gradient-to-r from-blue-500 to-cyan-600 bg-clip-text text-center text-[100px] font-bold text-transparent">
          AuctionCoin
        </h2>
        <p className="mx-8 text-center text-body-large">
          {`AuctionCoin is a decentralized financial game where tokens are periodically emitted through auctions. The capital acquired from the auctions' proceeds will be used to buy back AuctionCoin tokens from the liquidity pool.
            This represents a specific implementation of the Auction Coin protocol, which defines a decentralized and fair mechanism for distributing tokens in the free market. This protocol can be used to distribute tokens, provide liquidity, raise funds, etc.
            More information can be found in the `}
          <a
            href="/assets/whitepaper.pdf"
            download="whitepaper"
            className="font-semibold text-primary hover:opacity-70"
          >
            [Auction Coin whitepaper]
          </a>
        </p>
      </div>
      <div className="flex h-36 flex-row justify-around gap-6">
        <Card elevation={4} className="flex w-64 items-center justify-center">
          <CardContent className="text-center">
            <h6>Next Start</h6>
            <div className="text-title-medium">
              {new Date(data.nextStart).toDateString()}
            </div>
          </CardContent>
        </Card>
        <Card elevation={4} className="flex w-64 items-center justify-center">
          <CardContent className="text-center">
            <h6>Current Price</h6>
            <div className="flex items-center gap-2 text-title-medium">
              {data.curPrice.toLocaleString('en-US', {
                minimumFractionDigits: 3,
              })}
              <span>ERG</span>
            </div>
          </CardContent>
        </Card>
        <Card elevation={4} className="flex w-64 items-center justify-center">
          <CardContent className="text-center">
            <h6>Circulating</h6>
            <div className="text-title-medium">{data.circulating}</div>
          </CardContent>
        </Card>
      </div>
      <div className="grid w-full grid-cols-2 gap-8">
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
