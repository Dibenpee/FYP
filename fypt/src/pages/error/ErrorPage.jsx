import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-600 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-8 max-w-md">
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>
        <Link to="/">
          <Button className="bg-gray-500 hover:bg-gray-400">
            Go Back Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
