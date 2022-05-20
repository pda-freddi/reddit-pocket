import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectSearchTerm, setSearchTerm, clearSearchTerm } from "./searchbarSlice.js";
import searchIcon from "../../icons/search.png";
import checkIcon from "../../icons/check.png";
import clearIcon from "../../icons/clear.png";
import styles from "./Searchbar.module.css";

const Searchbar = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchTerm = useSelector(selectSearchTerm);

  const handleChange = (term) => {
    dispatch(setSearchTerm(term));
  };

  const handleClick = () => {
    dispatch(clearSearchTerm());
    navigate(`/search?q=${searchTerm}`);
  };

  const focusInput = () => {
    document.getElementById("searchInput").focus();
  };

  return (
    <div className={styles.searchbarContainer}>
      <img 
        className={styles.searchIcon} 
        src={searchIcon} 
        alt="Search" 
        onClick={focusInput}/>
      <input
        className={styles.searchInput}
        id="searchInput"
        type="text"
        placeholder="Search posts..."
        aria-label="search"
        value={searchTerm}
        onChange={({ target }) => handleChange(target.value)}
      />
      {
        searchTerm ?
        <>
        <button className={styles.searchButton} onClick={handleClick}>
          <img src={checkIcon} alt="Search" />
        </button>
        <button className={styles.clearButton} onClick={() => dispatch(clearSearchTerm())}>
          <img src={clearIcon} alt="Clear" />
        </button>
        </>
        :
        ""
      }
    </div>
  );
};

export default Searchbar;