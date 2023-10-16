import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { Card, CardContent, Skeleton } from '@mui/material';

import { getLeftTime, useCountdown } from '@/hooks/useCountdown';

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
  const startRemainTime = useCountdown(new Date(nextStart));

  return (
    <div className="flex flex-row flex-wrap justify-around gap-6">
      <Card
        elevation={4}
        className="flex h-36 w-64 items-center justify-center"
      >
        <CardContent className="text-center">
          <h6>Next Start</h6>
          <div className="text-title-medium">
            {!nextStart ? (
              <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
            ) : (
              <div className="flex flex-col text-center">
                <span>{formatter.format(new Date(nextStart))}</span>
                <span>{getLeftTime(startRemainTime)}</span>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
      <Card
        elevation={4}
        className="flex h-36 w-64 items-center justify-center"
      >
        <CardContent className="text-center">
          <h6>Current Price</h6>
          <div className="flex items-center justify-center gap-2 text-title-medium">
            {!curPrice ? (
              <Skeleton
                variant="text"
                sx={{ fontSize: '1rem', width: '100%' }}
              />
            ) : (
              <>
                {(curPrice / 1e9).toLocaleString('en-US', {
                  minimumFractionDigits: 3,
                })}
                <span>ERG</span>
              </>
            )}
          </div>
          <a
            className="flex justify-center text-body-medium text-secondary hover:opacity-70 dark:text-secondary-dark"
            href="https://app.spectrum.fi/ergo/swap?base=0000000000000000000000000000000000000000000000000000000000000000&quote=aee8132a6602dd215dac8d1caf973581277614e267702a770f45d7ffe5234cba&initialPoolId=915da2ac421906919351163a9afa1f17918272750987906b00247e91925e757d"
            target="_blank"
          >
            [buy AuctionCoin]
            <ArrowOutwardIcon className="self-start text-[0.75rem]" />
          </a>
        </CardContent>
      </Card>
      <Card
        elevation={4}
        className="flex h-36 w-64 items-center justify-center"
      >
        <CardContent className="text-center">
          <h6>Circulating</h6>
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
