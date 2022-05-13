import React from "react";
import Hotbar from "../../features/hotbar/Hotbar.js";
import Sidebar from "../sidebar/Sidebar.js";
import Posts from "../../features/posts/Posts.js";
import styles from "./Main.module.css";

const Main = () => {
  return (
    <main className={styles.main}>
      <div className={styles.mainContainer}>
        <Hotbar />
        <Sidebar />
        <Posts />
      </div>
    </main>
  );
};

export default Main;