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
            width={152}
            height={36}
          />
        </figure>
      </div>
    </Link>
  );
};

export { AuctionCoinLogo };
