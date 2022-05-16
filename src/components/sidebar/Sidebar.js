import React from "react";
import Subreddits from "../../features/subreddits/Subreddits.js";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <aside className={styles.sidebarContainer}>
      <h2 className={styles.title}>Popular Subreddits</h2>
      <Subreddits />
    </aside>
  );
};

export default Sidebar;