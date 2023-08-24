import { useState } from "react";

export default function Searchbar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    onSearch(searchTerm);
  };
  return (
    <div className="searchbar">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for a post"
      />

      <button onClick={handleSearch}>Search</button>
    </div>
  );
}
