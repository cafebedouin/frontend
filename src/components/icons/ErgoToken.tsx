import Image from 'next/image';

import { IconProps } from '@/components/icons/icon';

const ErgoToken = ({ size, ...props }: IconProps) => {
  return (
    <div {...props}>
      <Image
        width={size}
        height={size}
        className="dark:invert"
        src="/assets/ergo-logo.svg"
        alt="ergo logo"
      />
    </div>
  );
};

export { ErgoToken };
