import React from "react";
import { Link } from "react-router-dom";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <aside className={styles.sidebarContainer}>
      <h2 className={styles.title}>Popular Subreddits</h2>
      <div className={styles.categoryContainer}>
        <Link to="r/games" className={styles.categoryLink}>r/games</Link>
        <Link to="r/music" className={styles.categoryLink}>r/music</Link>
        <Link to="r/football" className={styles.categoryLink}>r/football</Link>
        <Link to="r/politics" className={styles.categoryLink}>r/politics</Link>
      </div>
    </aside>
  );
};

export default Sidebar;