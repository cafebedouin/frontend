import { Box, Paper, styled } from '@mui/material';

import { useCountdown, UseCountdownReturnType } from '@/hooks/useCountdown';

const Wrapper = styled('ul')`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: fit-content;
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

interface TimeProps {
  date: number;
  title?: boolean;
  background?: string;
  alwaysWhite?: boolean;
}

const Time = ({ date, title = false, alwaysWhite = false }: TimeProps) => {
  const countDown = useCountdown(new Date(date));

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
      {Object.keys(countDown).map((key) => {
        return (
          <Box
            component="li"
            sx={{
              '&::after': {
                content: `"${getSign(key)}"`,
                marginInline: 'auto',
              },
            }}
            className="flex"
            key={key}
          >
            <div className="flex flex-col items-center">
              <Holder className="fs-m">
                {String(
                  countDown[key as keyof UseCountdownReturnType],
                ).padStart(2, '0')}
              </Holder>
              {title && (
                <span
                  className={`text-[0.6rem] font-light ${
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
