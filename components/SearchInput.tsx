import { Search } from "lucide-react";
import { useState } from "react";

export default function SearchInput({ onClick }: { onClick: () => void }) {
  const [query, setQuery] = useState("");

  return (
    <div
      onClick={onClick}
      className="flex items-center gap-2 border border-pinkSoft rounded-2xl px-3 py-2 w-[251px] bg-pinkSoft font-thin cursor-pointer"
    >
      <Search size={18} />
      <input
        type="text"
        value={query}
        placeholder="search chocolates and cakes..."
        onChange={(e) => setQuery(e.target.value)}
        onFocus={onClick}
        className="outline-none border-none flex-1 text-sm text-black bg-pinkSoft placeholder-black cursor-pointer"
        readOnly   // important: prevent typing here
      />
    </div>
  );
}
