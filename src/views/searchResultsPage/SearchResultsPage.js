import React from "react";
import Posts from "../../features/posts/Posts.js"
import BackButton from "../../components/buttons/backButton/BackButton.js";
import styles from "./SearchResultsPage.module.css";

const SearchResultsPage = () => {
  return (
    <>
      <BackButton />
      <section className={styles.searchResultsContainer}>
        <h2 className={styles.searchResultsHeading}>Search results</h2>
        <Posts />
      </section>
    </>
  );
};

export default SearchResultsPage;