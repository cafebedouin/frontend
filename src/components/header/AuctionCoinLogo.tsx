import Image from 'next/image';
import Link from 'next/link';

const AuctionCoinLogo = () => {
  return (
    <Link href="/">
      <div>
        <figure className="m-auto flex items-center justify-center">
          <Image
            priority
            src="/logo.svg"
            alt="auction coin logo"
            width={80}
            height={80}
          />
        </figure>
      </div>
    </Link>
  );
};

export { AuctionCoinLogo };
