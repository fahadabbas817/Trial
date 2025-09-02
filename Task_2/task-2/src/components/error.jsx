import { AlertTriangle } from "lucide-react";

const Error = ({ onRetry }) => {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <AlertTriangle className="w-16 h-16 text-red-500 animate-bounce" />
      <p className="mt-4 text-lg text-gray-700">Something went wrong!</p>
      <button
        onClick={onRetry}
        className="mt-6 px-6 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition"
      >
        Retry
      </button>
    </div>
  );
};

export default Error;
