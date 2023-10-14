import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
    <div className="mx-auto h-44 w-11/12 rounded-lg bg-primary p-8 text-white">
      <div className="flex  flex-col gap-4">
        <span>Auction Coin</span>
        <div className="flex gap-3">
          <a href="/">
            <TwitterIcon className="hover:text-gray-300" />
          </a>
          <a href="/">
            <GitHubIcon className="hover:text-gray-300" />
          </a>
        </div>
      </div>
    </div>
  );
};

export { Footer };
