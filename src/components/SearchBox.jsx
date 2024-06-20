"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const SearchBox = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/search/${search}`);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-between px-5 max-w-6xl mx-auto"
    >
      <input
        type="text"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        placeholder="Search keywords..."
        className="w-full h-14 rounded-md placeholder-gray-500 outline-none bg-transparent flex-1"
      />
      <button
        className="text-amber-600 disabled:text-gray-500"
        disabled={!search}
      >
        Search
      </button>
    </form>
  );
};

export default SearchBox;
