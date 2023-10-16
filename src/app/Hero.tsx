import Image from 'next/image';

const Hero = () => {
  return (
    <div className="relative mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 lg:w-8/12">
      <Image
        width={400}
        height={400}
        alt="logo"
        src="/logo.svg"
        className="absolute -left-32 -top-12 opacity-20"
      />
      <h2 className="z-[2] flex flex-col text-6xl font-bold">
        <span>The</span>
        <span className="animate-pulse bg-gradient-to-r from-blue-500 to-cyan-600 bg-clip-text text-transparent">
          Auction Coin
        </span>
        <span>Protocol</span>
      </h2>
      <div className="z-[2] flex flex-col gap-2">
        <p className="text-start text-body-large">{`AuctionCoin is a decentralized financial game where tokens are periodically emitted through auctions. The capital acquired from the auctions' proceeds will be used to buy back AuctionCoin tokens from the liquidity pool.`}</p>
        <p className="text-start text-body-large">
          This represents a specific implementation of the Auction Coin
          protocol, which defines a decentralized and fair mechanism for
          distributing tokens in the free market. This protocol can be used to
          distribute tokens, provide liquidity, raise funds, etc.
        </p>
        <p className="text-start text-body-large">
          {`More information can be found in the `}
          <a
            href="/assets/whitepaper.pdf"
            download="whitepaper"
            className="font-semibold text-primary hover:opacity-70"
          >
            [Auction Coin whitepaper]
          </a>
        </p>
      </div>
    </div>
  );
};

export { Hero };
