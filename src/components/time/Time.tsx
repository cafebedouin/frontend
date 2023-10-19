import { useEffect, useMemo, useState } from 'react';

import { Box, Paper, styled } from '@mui/material';

const Wrapper = styled('ul')`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.2rem;
  align-items: center;
  margin: 0;
  padding: 0;
`;

const Holder = styled(Paper)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  width: 22px;
  height: 22px;
`;

type RemainTime = {
  day: number;
  hour: number;
  minute: number;
  second: number;
};

interface TimeProps {
  date: number;
  nodeTime: number;
  title?: boolean;
  background?: string;
  alwaysWhite?: boolean;
}

const Time = ({
  date,
  title = false,
  nodeTime,
  alwaysWhite = false,
}: TimeProps) => {
  const [remainTime, setRemainTime] = useState<RemainTime>({
    day: 0,
    hour: 0,
    minute: 0,
    second: 0,
  });
  const calculateRemainTime = (): RemainTime => {
    const difference = date - new Date().getTime() + nodeTimeDiff;
    let remainTime: RemainTime = {
      day: 0,
      hour: 0,
      minute: 0,
      second: 0,
    };

    if (difference > 0) {
      remainTime = {
        day: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hour: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minute: Math.floor((difference / 1000 / 60) % 60),
        second: Math.floor((difference / 1000) % 60),
      };
    }

    return remainTime;
  };

  const updateRemainTime = () => {
    setRemainTime(calculateRemainTime());
  };

  const nodeTimeDiff = useMemo(() => {
    return nodeTime - new Date().getTime();
  }, [nodeTime]);

  useEffect(() => {
    setRemainTime(calculateRemainTime());

    const intervalId = setInterval(updateRemainTime, 1000);

    return () => {
      clearInterval(intervalId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nodeTime]);

  const getSign = (key: string) => {
    switch (key) {
      case 'day':
        return '-';

      case 'hour':
      case 'minute':
        return ':';

      case 'second':
        return '';
    }
  };

  return (
    <Wrapper>
      {Object.keys(remainTime).map((key) => {
        return (
          <Box
            component="li"
            sx={{
              '&::after': {
                content: `"${getSign(key)}"`,
                marginInline: 'auto',
              },
            }}
            className="d-flex"
            key={key}
          >
            <div className="flex flex-col items-center">
              <Holder className="fs-m">
                {String(remainTime[key as keyof RemainTime]).padStart(2, '0')}
              </Holder>
              {title && (
                <span
                  className={`text-xs font-light ${
                    alwaysWhite ? 'text-white' : ''
                  }`}
                >
                  {key}
                </span>
              )}
            </div>
          </Box>
        );
      })}
    </Wrapper>
  );
};

export { Time };
