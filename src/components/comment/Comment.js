import React from "react";
import upArrowIcon from "../../icons/up-arrow.png";
import downArrowIcon from "../../icons/down-arrow.png";
import styles from "./Comment.module.css";

const Comment = () => {

  return (
    <article className={styles.commentContainer}>
      <section className={styles.commentDetailsContainer}>
        <p className={styles.commentDetailsAuthor}>Author</p>
        <p className={styles.commentDetailsCreated}>• 18h ago</p>
        <p className={styles.commentDetailsEdited}>• Edited 5h ago</p>
      </section>
      <p className={styles.commentText}>Comment text</p>
      <section className={styles.commentScoreContainer}>
        <img src={upArrowIcon} alt="up arrow" className={styles.commentScoreUpArrow} />
        <span className={styles.commentScore}>5.2k</span>
        <img src={downArrowIcon} alt="down arrow" className={styles.commentScoreDownArrow} />
      </section>
    </article>
  );
};

export default Comment;