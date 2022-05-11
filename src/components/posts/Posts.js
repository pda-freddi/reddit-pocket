import React from "react";
import Post from "../../features/post/Post.js";
import styles from "./Posts.module.css";

const Posts = () => {
  return (
    <section className={styles.postsContainer}>
    {/* Will map state to individual Post components */}
      <Post />
      <Post />
    </section>
  );
};

export default Posts;