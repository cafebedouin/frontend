import { Card, CardContent } from '@mui/material';

import { ErgoToken } from '@/components/icons/ErgoToken';
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
    <main className="flex min-h-screen flex-col items-center gap-5 p-24">
      <div className="flex h-36 flex-row justify-around gap-6">
        <Card className="flex w-64 items-center justify-center">
          <CardContent className="text-center">
            <h6>Next Start</h6>
            <div className="text-title-medium">
              {new Date(data.nextStart).toDateString()}
            </div>
          </CardContent>
        </Card>
        <Card className="flex w-64 items-center justify-center">
          <CardContent className="text-center">
            <h6>Current Price</h6>
            <div className="flex items-center gap-2 text-title-medium">
              {data.curPrice.toLocaleString('en-US', {
                minimumFractionDigits: 3,
              })}
              <ErgoToken size={16} />
            </div>
          </CardContent>
        </Card>
        <Card className="flex w-64 items-center justify-center">
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
