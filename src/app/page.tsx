import { Card, CardContent, Typography } from '@mui/material';

import { ErgoToken } from '@/components/icons/ErgoToken';
import { UpcomingAuctions } from '@/components/Tables';

const HomePage = async () => {
  const res = await fetch('https://api.auctioncoin.app/info');
  const data: {
    nextStart: number;
    curPrice: number;
    circulating: number;
    auctionList: Array<{
      numCoinsToAuction: number;
      period: number;
      coef: number;
    }>;
  } = await res.json();

  /*const activeAuctionRes = await fetch(
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
  const activeAuction: { data: Array<unknown>; has_more: boolean } =
    await activeAuctionRes.json();*/

  return (
    <main className="flex min-h-screen flex-col items-center gap-5 p-24">
      <div className="flex h-36 flex-row justify-around gap-6">
        <Card className="flex w-64 items-center justify-center">
          <CardContent className="text-center">
            <Typography variant="h6" component="div">
              Next Start
            </Typography>
            <Typography variant="body2">
              {new Date(data.nextStart).toDateString()}
            </Typography>
          </CardContent>
        </Card>
        <Card className="flex w-64 items-center justify-center">
          <CardContent className="text-center">
            <Typography variant="h6" component="div">
              Current Price
            </Typography>
            <Typography variant="body2" className="flex gap-2">
              {data.curPrice.toLocaleString('en-US', {
                minimumFractionDigits: 3,
              })}{' '}
              <ErgoToken size={16} />
            </Typography>
          </CardContent>
        </Card>
        <Card className="flex w-64 items-center justify-center">
          <CardContent className="text-center">
            <Typography variant="h6" component="div">
              Circulating
            </Typography>
            <Typography variant="body2">{data.circulating}</Typography>
          </CardContent>
        </Card>
      </div>

      <div className="grid w-full grid-cols-2 gap-8">
        <UpcomingAuctions
          auctionList={data?.auctionList}
          currentPrice={data?.curPrice}
        />
        <UpcomingAuctions
          auctionList={data?.auctionList}
          currentPrice={data?.curPrice}
        />
      </div>
    </main>
  );
};

export default HomePage;
