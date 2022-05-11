import React from "react";
import styles from "./Searchbar.module.css";

const Searchbar = () => {
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

export default Searchbar;