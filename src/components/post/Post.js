import React from "react";
import UpArrowIcon from "../../icons/up-arrow.png";
import DownArrowIcon from "../../icons/down-arrow.png";
import styles from "./Post.module.css";

const Post = () => {
  return (
    <article className={styles.postContainer}>
      <div className={styles.postScoreContainer}>
        <img src={UpArrowIcon} alt="up arrow" className={styles.postScoreUpArrow} />
        <span className={styles.postScore}>2.5k</span>
        <img src={DownArrowIcon} alt="down arrow" className={styles.postScoreDownArrow} />
      </div>
      <div className={styles.postContent}>
        <p className={styles.postSection}>Subreddit: r/sports</p>
        <h2 className={styles.postTitle}>Title</h2>
        <p className={styles.postMedia}>Content</p>
        <div className={styles.postDetailsContainer}>
          <p className={styles.postDetails}>Author</p>
          <p className={styles.postDetails}>Created 16h ago</p>
          <p className={styles.postDetailsComments}>Comments</p>
        </div>
      </div>
    </article>
  );
};

export default Post;