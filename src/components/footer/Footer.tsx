import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
    <footer className="mx-auto h-44 w-11/12 rounded-lg bg-primary p-8 text-white">
      <div className="flex flex-col gap-4">
        <span className="text-title-medium">Auction Coin</span>
        <a
          href="/assets/whitepaper.pdf"
          className="text-title-small hover:text-gray-300"
          download="whitepaper"
        >
          Whitepaper
        </a>
        <div className="flex gap-3">
          <a href="/">
            <TwitterIcon className="hover:text-gray-300" />
          </a>
          <a href="/">
            <GitHubIcon className="hover:text-gray-300" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
