import React from "react";
import { getFormattedDate,
         getFormattedScore } from "../../utils/helpers/getFormattedDetails.js";
import Markdown from "markdown-to-jsx";
import upArrowIcon from "../../icons/up-arrow.png";
import downArrowIcon from "../../icons/down-arrow.png";
import styles from "./Comment.module.css";

const Comment = ({ comment }) => {

  const commentScore = getFormattedScore(comment.score);
  const commentDate = getFormattedDate(comment.created);
  const commentEdit = comment.edited ? getFormattedDate(comment.edited) : false;

  return (
    <article className={styles.commentContainer}>
      <section className={styles.commentDetailsContainer}>
        <p className={styles.commentDetailsAuthor}>{comment.author}</p>
        <p className={styles.commentDetailsCreated}>• {commentDate}</p>
        <p className={styles.commentDetailsEdited}>
          { commentEdit ? `• Edited ${commentEdit}` : "" }
        </p>
      </section>
      <Markdown className={styles.commentText}>{comment.body}</Markdown>
      <section className={styles.commentScoreContainer}>
        <img src={upArrowIcon} alt="up arrow" className={styles.commentScoreUpArrow} />
        <span className={styles.commentScore}>{commentScore}</span>
        <img src={downArrowIcon} alt="down arrow" className={styles.commentScoreDownArrow} />
      </section>
    </article>
  );
};

export default Comment;