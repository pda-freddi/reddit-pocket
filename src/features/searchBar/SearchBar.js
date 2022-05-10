import React from "react";
import styles from "./SearchBar.module.css";

const SearchBar = () => {
  const inputValue = "";
  const setValue = "";
  return (
      <input
        className={styles.input}
        type="text"
        placeholder="Search..."
        aria-label="search"
        value={inputValue}
        onChange={setValue}
      />
  );
};

export default SearchBar;