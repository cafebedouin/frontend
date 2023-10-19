import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

export type UpcomingAuctionType = {
  numCoinsToAuction: number;
  period: number;
  coef: number;
};

export interface UpcomingAuctionSingleRowProps extends UpcomingAuctionType {
  currentPrice: number;
}

const UpcomingAuctionSingleRow = ({
  currentPrice,
  numCoinsToAuction,
  period,
  coef,
}: UpcomingAuctionSingleRowProps) => {
  const seconds = period / 1e3;
  const minutes = seconds / 60;
  const hours = minutes / 60;
  const days = hours / 24;

  const periodTime =
    days >= 1
      ? days + (days > 1 ? ' days' : ' day')
      : hours >= 1
      ? hours + (hours > 1 ? ' hours' : ' hour')
      : minutes >= 1
      ? minutes + (minutes > 1 ? ' minutes' : ' minute')
      : seconds + (seconds > 1 ? ' seconds' : ' second');
  const price = ((1e3 / coef) * numCoinsToAuction * currentPrice) / 1e9;

  return (
    <TableRow>
      <TableCell>{numCoinsToAuction} AuctionCoins</TableCell>
      <TableCell>{periodTime}</TableCell>
      <TableCell className="flex gap-2">
        {price.toLocaleString('en-US', { minimumFractionDigits: 3 })}
        <span>ERG</span>
      </TableCell>
    </TableRow>
  );
};

export interface UpcomingAuctionsProps
  extends Pick<UpcomingAuctionSingleRowProps, 'currentPrice'> {
  auctionList: Array<UpcomingAuctionType>;
}

const UpcomingAuctions = ({
  auctionList,
  currentPrice,
}: UpcomingAuctionsProps) => {
  return (
    <div className="flex flex-col">
      <h3 className="inline-block bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 bg-clip-text text-center text-3xl font-bold text-transparent">
        Upcoming Auctions
      </h3>
      <TableContainer className="mt-4">
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Quantity</TableCell>
              <TableCell>Period</TableCell>
              <TableCell>Start Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {auctionList.map((row, index) => (
              <UpcomingAuctionSingleRow
                key={index}
                currentPrice={currentPrice}
                numCoinsToAuction={row.numCoinsToAuction}
                period={row.period}
                coef={row.coef}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export { UpcomingAuctions };
