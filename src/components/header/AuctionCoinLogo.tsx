import Image from 'next/image';
import Link from 'next/link';

const AuctionCoinLogo = () => {
  return (
    <Link href="/">
      <div>
        <figure className="m-auto flex items-center justify-center">
          <Image
            src="/logo/logo-color.png"
            alt="auction coin logo"
            width={140}
            height={28}
          />
        </figure>
      </div>
    </Link>
  );
};

export { AuctionCoinLogo };
