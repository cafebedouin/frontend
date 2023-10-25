import LaunchIcon from '@mui/icons-material/Launch';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

import {
  StyledTableCell,
  StyledTableRow,
} from '@/components/Tables/StyledTable';
import { getLeftTime, useCountdown } from '@/hooks/useCountdown';

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
    <StyledTableRow>
      <StyledTableCell>{numberOfToken} AuctionCoins</StyledTableCell>
      <StyledTableCell>{getLeftTime(timeLeft)}</StyledTableCell>
      <StyledTableCell>
        <span>
          {(price / 1e9).toLocaleString('en-US', { minimumFractionDigits: 3 })}
        </span>{' '}
        <span>ERG </span>
        <span>
          (
          {(price / 1e9 / numberOfToken).toLocaleString('en-US', {
            minimumFractionDigits: 3,
          })}{' '}
          per AC)
        </span>
      </StyledTableCell>
      <StyledTableCell>
        <a
          href={`https://ergoauctions.org/artwork/52f4544ce8a420d484ece16f9b984d81c23e46971ef5e37c29382ac50f80d5bd?auction=${auctionId}`}
          target="_blank"
        >
          <LaunchIcon
            className="text-[1rem] text-secondary dark:text-secondary-dark"
            fontSize="small"
          />
        </a>
      </StyledTableCell>
    </StyledTableRow>
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
        <Table className="min-w-[650px] md:min-w-full" size="small">
          <TableHead>
            <TableRow>
              <TableCell>Quantity</TableCell>
              <TableCell>Remaining Time</TableCell>
              <TableCell>Current Price</TableCell>
              <TableCell>Link</TableCell>
            </TableRow>
          </TableHead>
          {auctions.length > 0 && (
            <TableBody>
              {auctions
                .sort((a, b) => {
                  return b.numberOfToken - a.numberOfToken;
                })
                .map((row, index) => (
                  <ActiveAuctionSingleRow
                    key={index}
                    auctionId={row?.auctionId}
                    numberOfToken={row.numberOfToken}
                    endTime={row.endTime}
                    price={row.price}
                  />
                ))}
            </TableBody>
          )}
        </Table>
      </TableContainer>
      {!auctions.length && (
        <p className="my-3 text-center text-title-medium">
          No Active Auctions Currently
        </p>
      )}
    </div>
  );
};

export { ActiveAuctions };
