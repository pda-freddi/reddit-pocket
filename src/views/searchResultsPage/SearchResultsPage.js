import React from "react";
import { useNavigate } from "react-router-dom";
import Posts from "../../features/posts/Posts.js"
import leftArrowIcon from "../../icons/left-arrow.png";
import styles from "./SearchResultsPage.module.css";

const SearchResultsPage = () => {

  const navigate = useNavigate();

  return (
    <>
      <button className={styles.backButton} onClick={() => navigate(-1)}>
        <img src={leftArrowIcon} alt="left arrow" />Back
      </button>
      <section className={styles.searchResultsContainer}>
        <h2 className={styles.searchResultsHeading}>Search results</h2>
        <Posts />
      </section>
    </>
  );
};

export default SearchResultsPage;