import React from 'react';

import LaunchIcon from '@mui/icons-material/Launch';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

import { useCountdown } from '@/hooks/useCountdown';

export type ActiveAuction = {
  auctionId: string;
  price: number;
  endTime: number;
  numberOfToken: number;
};

const ActiveAuctionSingleRow = ({
  auctionId,
  price,
  endTime,
  numberOfToken,
}: ActiveAuction) => {
  const timeLeft = useCountdown(new Date(endTime));

  return (
    <TableRow>
      <TableCell>{numberOfToken}</TableCell>
      <TableCell>
        {timeLeft.days} {timeLeft.days > 1 ? 'days' : 'day'}
      </TableCell>
      <TableCell className="flex gap-2">
        {price.toLocaleString('en-US', { minimumFractionDigits: 3 })}
        <span>ERG</span>
      </TableCell>
      <TableCell>
        <a
          href={`https://ergoauctions.org/artwork/aee8132a6602dd215dac8d1caf973581277614e267702a770f45d7ffe5234cba?auction=${auctionId}`}
        >
          <LaunchIcon />
        </a>
      </TableCell>
    </TableRow>
  );
};

export interface ActiveAuctionsProps {
  auctions: Array<ActiveAuction>;
}

const ActiveAuctions = ({ auctions }: ActiveAuctionsProps) => {
  return (
    <div className="flex flex-col">
      <h3 className="inline-block bg-gradient-to-r from-red-500 via-yellow-500 to-orange-500 bg-clip-text text-center text-3xl font-bold text-transparent">
        Active Auctions
      </h3>

      <TableContainer className="mt-4">
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Number of AuctionCoins</TableCell>
              <TableCell>Remaining Time</TableCell>
              <TableCell>Current Price</TableCell>
              <TableCell>Link</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {auctions.map((row, index) => (
              <ActiveAuctionSingleRow
                key={index}
                auctionId={row?.auctionId}
                numberOfToken={row.numberOfToken}
                endTime={row.endTime}
                price={row.price}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export { ActiveAuctions };
