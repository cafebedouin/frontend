// Import necessary MUI components
import {
  Card,
  CardContent,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

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
      <div className="flex flex-row justify-around gap-3">
        <Card className="w-64">
          <CardContent className="text-center">
            <Typography variant="h6" component="div">
              Next Start
            </Typography>
            <Typography variant="body2">
              {new Date(data.nextStart).toDateString()}
            </Typography>
          </CardContent>
        </Card>
        <Card className="w-64">
          <CardContent className="text-center">
            <Typography variant="h6" component="div">
              Current Price
            </Typography>
            <Typography variant="body2">{data.curPrice.toFixed(3)}</Typography>
          </CardContent>
        </Card>
        <Card className="w-64">
          <CardContent className="text-center">
            <Typography variant="h6" component="div">
              Circulating
            </Typography>
            <Typography variant="body2">{data.circulating}</Typography>
          </CardContent>
        </Card>
      </div>

      <TableContainer className="mt-4">
        <Table size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Num Coins To Auction</TableCell>
              <TableCell>Period</TableCell>
              <TableCell>Coef</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.auctionList.map((row) => (
              <TableRow key={row.numCoinsToAuction}>
                <TableCell>{row.numCoinsToAuction}</TableCell>
                <TableCell>{row.period}</TableCell>
                <TableCell>{row.coef}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </main>
  );
};

export default HomePage;
