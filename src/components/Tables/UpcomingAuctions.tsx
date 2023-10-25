import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

import { getLeftTime } from '@/hooks/useCountdown';

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
  const second = period / 1e3;
  const minute = second / 60;
  const hour = minute / 60;
  const day = hour / 24;

  const price = ((1e3 / coef) * numCoinsToAuction * currentPrice) / 1e9;

  return (
    <TableRow>
      <TableCell>{numCoinsToAuction} AuctionCoins</TableCell>
      <TableCell>{getLeftTime({ day, hour, minute, second })}</TableCell>
      <TableCell>
        {price.toLocaleString('en-US', { minimumFractionDigits: 3 })}{' '}
        <span>ERG </span>
        <span>
          (
          {(price / numCoinsToAuction).toLocaleString('en-US', {
            minimumFractionDigits: 3,
          })}{' '}
          per AC)
        </span>
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
        <Table className="min-w-[650px] md:min-w-full" size="small">
          <TableHead>
            <TableRow>
              <TableCell>Quantity</TableCell>
              <TableCell>Period</TableCell>
              <TableCell>Start Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {auctionList
              .sort((a, b) => {
                return b.numCoinsToAuction - a.numCoinsToAuction;
              })
              .map((row, index) => (
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
