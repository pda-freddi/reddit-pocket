import React from "react";
import { Routes, Route } from "react-router-dom";
import UniquePost from "./views/uniquePost.js";
import PostsFeed from "./views/postsFeed.js";
import styles from "./Main.module.css";

const Main = () => {
  return (
    <main className={styles.main}>
      <div className={styles.mainContainer}>
        <Routes>
            <Route path="/r/:subreddit/comments/*" element={<UniquePost />} />
            <Route path="*" element={<PostsFeed />} />
        </Routes>
      </div>
    </main>
  );
};

export default Main;