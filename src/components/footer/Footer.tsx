import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Paper } from '@mui/material';

const Footer = () => {
  return (
    <Paper
      component="footer"
      elevation={4}
      className="mx-auto h-44 w-11/12 rounded-lg p-8"
    >
      <div className="flex flex-col items-start gap-4">
        <span className="text-title-medium">Auction Coin</span>
        <a
          href="/assets/whitepaper.pdf"
          className="text-title-small hover:opacity-70"
          download="whitepaper"
        >
          Whitepaper
        </a>
        <div className="flex gap-3">
          <a href="https://twitter.com/Auction_Coin" target="_blank">
            <TwitterIcon className="hover:opacity-70" />
          </a>
          <a
            href="https://github.com/orgs/Auction-Coin/repositories"
            target="_blank"
          >
            <GitHubIcon className="hover:opacity-70" />
          </a>
        </div>
      </div>
    </Paper>
  );
};

export { Footer };
