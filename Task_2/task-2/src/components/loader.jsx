import { Loader2 } from "lucide-react";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 animate-pulse">
      <Loader2 className="w-16 h-16 text-blue-500 animate-spin" />
      <p className="mt-4 text-lg text-gray-600">Loading movies...</p>
    </div>
  );
};

export default Loading;
