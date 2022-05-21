import React from "react";
import { Routes, Route } from "react-router-dom";
import UniquePost from "../../views/uniquePost/UniquePost.js";
import PostsFeed from "../../views/postsFeed/PostsFeed.js";
import SearchResultsPage from "../../views/searchResultsPage/SearchResultsPage.js";
import ScrollTopButton from "../buttons/scrollTopButton/ScrollTopButton.js";
import styles from "./Main.module.css";

const Main = () => {
  return (
    <main className={styles.main}>
      <div className={styles.mainContainer}>
        <Routes>
            <Route path="/r/:subreddit/comments/*" element={<UniquePost />} />
            <Route path="/search" element={<SearchResultsPage />} />
            <Route path="*" element={<PostsFeed />} />
        </Routes>
        <ScrollTopButton />
      </div>
    </main>
  );
};

export default Main;