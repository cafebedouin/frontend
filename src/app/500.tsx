import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { Alert } from '@mui/material';

export default function Custom500() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="rounded-lg bg-white p-8 shadow-lg">
        <div className="mb-4 flex items-center justify-center">
          <ErrorOutlineIcon fontSize="large" className="mr-2 text-red-500" />
          <h1 className="text-2xl font-bold text-red-500">Oops!</h1>
        </div>
        <p className="mb-4 text-lg text-gray-600">
          An error occurred on the server. Please try again later.
        </p>
        <button
          className="rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-600"
          onClick={() => window.location.reload()}
        >
          Refresh
        </button>
      </div>
    </div>
  );
}
