import { SearchX } from "lucide-react";

const EmptyState = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <SearchX className="w-16 h-16 text-gray-400 animate-pulse" />
      <p className="mt-4 text-lg text-gray-600">
        No movies found. Try a different search.
      </p>
    </div>
  );
};

export default EmptyState;
