import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getFormattedDate,
         getFormattedScore,
         getFormattedNumOfComments } from "../../utils/helpers/getFormattedDetails.js";
import upArrowIcon from "../../icons/up-arrow.png";
import downArrowIcon from "../../icons/down-arrow.png";
import { Link } from "react-router-dom";
import { getPostMediaJSX } from "../../utils/helpers/getPostMediaJSX.js";
import styles from "./Post.module.css";

const Post = ({ post }) => {

  // Check if current location is comments page to render appropriate link
  const { pathname } = useLocation();
  const isCommentsPage = pathname.includes("comments");

  // Get formatted post details
  const postScore = getFormattedScore(post.score);
  const postDate = getFormattedDate(post.created);
  const numOfComments = getFormattedNumOfComments(post.numOfComments);

  // Get post media as JSX
  const postMediaJSX = getPostMediaJSX(post);
  
  // When post has video and audio, play them simultaneously
  useEffect(() => {
    if (post.isVideo && post.media && !post.media.is_gif) {
      const video = document.getElementById(`${post.id}v`);
      const audio = document.getElementById(`${post.id}a`);
      const playAudio = () => audio.play();
      const pauseAudio = () => audio.pause();
      video.addEventListener("play", playAudio);
      video.addEventListener("pause", pauseAudio);
      return () => {
        video.removeEventListener("play", playAudio);
        video.removeEventListener("pause", pauseAudio);
      };
    }
  });

  return (
    <article className={styles.postContainer}>
      <div className={styles.postScoreContainer}>
        <img src={upArrowIcon} alt="up arrow" className={styles.postScoreUpArrow} />
        <span className={styles.postScore} aria-label="post score">{postScore}</span>
        <img src={downArrowIcon} alt="down arrow" className={styles.postScoreDownArrow} />
      </div>
      <div className={styles.postContent}>
        <p className={styles.postSection}>{post.subreddit}</p>
        <h2 className={styles.postTitle}>{post.title}</h2>
        {postMediaJSX}
        <div className={styles.postDetailsContainer}>
          <p className={styles.postDetails}>Author: {post.author}</p>
          <p className={styles.postDetails}>Sent {postDate}</p>
          {
            isCommentsPage ? 
            <p className={styles.postDetailsComments}>Comments</p>
            :
            <Link to={post.link} className={styles.postDetailsCommentsLink}>
              Comments ({numOfComments})
            </Link>
          }
        </div>
      </div>
    </article>
  );
};

export default Post;