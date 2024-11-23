import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { Card, CardContent, Skeleton } from '@mui/material';

import { Time } from '@/components/time';

const Cards = ({
  nextStart,
  curPrice,
  circulating,
}: {
  nextStart: number;
  curPrice: number;
  circulating: number;
}) => {
  const formatter = new Intl.DateTimeFormat('en-US', {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <div className="flex flex-row flex-wrap justify-around gap-6">
      <Card elevation={4} className="flex h-40 w-64 justify-center">
        <CardContent className="text-center">
          <h6 className="mb-2">Next Auctions Start Time</h6>
          <div className="flex flex-col items-center">
            {!nextStart ? (
              <>
                <Skeleton
                  width="100%"
                  variant="text"
                  sx={{ fontSize: '1rem' }}
                />
                <Skeleton width={32} variant="text" sx={{ fontSize: '1rem' }} />
                <Skeleton
                  width="100%"
                  variant="text"
                  sx={{ fontSize: '1rem' }}
                />
              </>
            ) : (
              <>
                <span className="text-center text-title-medium">
                  {formatter.format(new Date(nextStart))}
                </span>
                <span>in</span>
                <Time date={nextStart} title />
              </>
            )}
          </div>
        </CardContent>
      </Card>
      <Card elevation={4} className="flex h-40 w-64 justify-center">
        <CardContent className="text-center">
          <h6 className="mb-2">Current Price</h6>
          <div className="flex items-center justify-center gap-2 text-title-medium">
            {!curPrice ? (
              <Skeleton
                variant="text"
                sx={{ fontSize: '1rem', width: '100%' }}
              />
            ) : (
              <>
                <span>1 AuctionCoin = </span>
                {(curPrice / 1e9).toLocaleString('en-US', {
                  minimumFractionDigits: 3,
                })}
                <span>ERG</span>
              </>
            )}
          </div>
          <a
            className="flex justify-center text-body-medium text-secondary hover:opacity-70 dark:text-secondary-dark"
            href="https://app.ergodex.io/ergo/swap?base=0000000000000000000000000000000000000000000000000000000000000000&quote=52f4544ce8a420d484ece16f9b984d81c23e46971ef5e37c29382ac50f80d5bd"
            target="_blank"
          >
            [buy AuctionCoin]
            <ArrowOutwardIcon className="self-start text-[0.75rem]" />
          </a>
        </CardContent>
      </Card>
      <Card elevation={4} className="flex h-40 w-64 justify-center">
        <CardContent className="text-center">
          <h6 className="mb-2">Circulating</h6>
          <div className="flex items-center gap-2 text-title-medium">
            {!circulating ? (
              <Skeleton
                variant="text"
                sx={{ fontSize: '1rem', width: '100%' }}
              />
            ) : (
              <>
                <div className="text-title-medium">{circulating}</div>
                <span>AuctionCoin</span>
              </>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export { Cards };
