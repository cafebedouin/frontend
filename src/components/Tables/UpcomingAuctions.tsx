import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

import { ErgoToken } from '@/components/icons/ErgoToken';

export type UpcomingAuctionType = {
  numCoinsToAuction: number;
  period: number;
  coef: number;
};

export interface SingleRowProps extends UpcomingAuctionType {
  currentPrice: number;
}

const SingleRow = ({
  currentPrice,
  numCoinsToAuction,
  period,
  coef,
}: SingleRowProps) => {
  const periodTime = Math.floor(period / (60 * 60 * 24));
  const price = (1e3 * coef * numCoinsToAuction * currentPrice) / 1e9;

  return (
    <TableRow>
      <TableCell>{numCoinsToAuction}</TableCell>
      <TableCell>
        {periodTime} {periodTime > 1 ? 'days' : 'day'}
      </TableCell>
      <TableCell className="flex gap-2">
        {price.toLocaleString('en-US', { minimumFractionDigits: 3 })}
        <ErgoToken size={16} />
      </TableCell>
    </TableRow>
  );
};

export interface UpcomingAuctionsProps
  extends Pick<SingleRowProps, 'currentPrice'> {
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
              <TableCell>Number of AuctionCoins</TableCell>
              <TableCell>Period</TableCell>
              <TableCell>Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {auctionList.map((row, index) => (
              <SingleRow
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
