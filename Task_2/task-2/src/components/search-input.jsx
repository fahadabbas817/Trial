import { memo } from "react";

const SearchInput = memo(({ value, onChange }) => {
  return (
    <input
      type="text"
      placeholder="Search movies..."
      value={value}
      onChange={onChange}
      className="w-full p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-indigo-500 outline-none"
    />
  );
});

export default SearchInput;
