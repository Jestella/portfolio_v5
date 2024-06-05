import { useState } from "react";
import styles from "./SearchBar.module.scss";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(query.trim());
  };

  const handleClear = () => {
    setQuery("");
    onSearch("");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.searchbar}>
      <input
        type="text"
        placeholder=" Search"
        value={query}
        onChange={handleChange}
      />
      {query && (
        <button
          type="button"
          onClick={handleClear}
          className={styles["search-x-button"]}
        >
          X
        </button>
      )}
    </form>
  );
};

export default SearchBar;
