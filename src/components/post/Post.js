import React from "react";
import { getFormattedPostDate,
         getFormattedPostScore,
         getFormattedNumOfComments } from "../../utils/getFormattedPostDetails";
import UpArrowIcon from "../../icons/up-arrow.png";
import DownArrowIcon from "../../icons/down-arrow.png";
import { Link } from "react-router-dom";
import { getPostMediaJSX } from "../../utils/getPostMediaJSX";
import styles from "./Post.module.css";

const Post = ({ post }) => {

  // Get formatted post details
  const postScore = getFormattedPostScore(post.score);
  const postDate = getFormattedPostDate(post.created);
  const numOfComments = getFormattedNumOfComments(post.numOfComments);

  // Get post media as JSX
  const postMediaJSX = getPostMediaJSX(post);

  return (
    <article className={styles.postContainer}>
      <div className={styles.postScoreContainer}>
        <img src={UpArrowIcon} alt="up arrow" className={styles.postScoreUpArrow} />
        <span className={styles.postScore}>{postScore}</span>
        <img src={DownArrowIcon} alt="down arrow" className={styles.postScoreDownArrow} />
      </div>
      <div className={styles.postContent}>
        <p className={styles.postSection}>{post.subreddit}</p>
        <h2 className={styles.postTitle}>{post.title}</h2>
        {postMediaJSX}
        <div className={styles.postDetailsContainer}>
          <p className={styles.postDetails}>Author: {post.author}</p>
          <p className={styles.postDetails}>Sent {postDate}</p>
          <Link to={post.link} className={styles.postDetailsComments}>Comments ({numOfComments})</Link>
        </div>
      </div>
    </article>
  );
};

export default Post;