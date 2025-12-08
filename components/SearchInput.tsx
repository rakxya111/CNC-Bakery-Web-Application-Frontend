import { Search } from "lucide-react";
import { useState, FormEvent } from "react";

export default function SearchInput() {
  const [query, setQuery] = useState<string>("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // You can implement search action here
    console.log("Search query:", query);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-2 border border-pinkSoft rounded-2xl px-3 py-2 w-[251px] bg-pinkSoft font-thin"
    >
      <Search size={18} />
      <input
        type="text"
        name="search"
        value={query}
        placeholder="search chocolates and cakes..."
        onChange={(e) => setQuery(e.target.value)}
        className="outline-none border-none flex-1 text-sm text-black bg-pinkSoft placeholder-black"
      />
      <button type="submit" className="hidden"></button>
    </form>
  );
}
