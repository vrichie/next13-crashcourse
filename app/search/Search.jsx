"use client";

import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";
export default function Search() {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    setSearch("");
    router.push(`/search/${search}`);
  };
  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        value={search}
        placeholder="Enter the search term"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}
