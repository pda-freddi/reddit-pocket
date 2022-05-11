import React from "react";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <aside className={styles.sidebarContainer}>
      <h2 className={styles.title}>Popular Subreddits</h2>
      <div className={styles.categoryContainer}>
        <a href="/" className={styles.categoryLink}>r/games</a>
        <a href="/" className={styles.categoryLink}>r/music</a>
        <a href="/" className={styles.categoryLink}>r/football</a>
        <a href="/" className={styles.categoryLink}>r/politics</a>
      </div>
    </aside>
  );
};

export default Sidebar;