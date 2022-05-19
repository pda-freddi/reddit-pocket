import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { getComments,
         selectIsLoading,
         selectFetchFailed,
         selectPost,
         selectComments
                        } from "./commentsSlice.js";
import { getFormattedNumOfComments } from "../../utils/getFormattedDetails.js";
import leftArrowIcon from "../../icons/left-arrow.png"
import Post from "../../components/post/Post.js";
import Comment from "../../components/comment/Comment.js";
import styles from "./Comments.module.css";

const Comments = () => {

  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const commentsArray = useSelector(selectComments);
  const post = useSelector(selectPost);
  const isLoading = useSelector(selectIsLoading);
  const fetchFailed = useSelector(selectFetchFailed);

  const numOfComments = getFormattedNumOfComments(post.numOfComments);

  useEffect(() => {
    dispatch(getComments(pathname));
  }, [dispatch, pathname]);

  if (isLoading) {
    return (
      <>
        <button className={styles.backButton} onClick={() => navigate(-1)}>
          <img src={leftArrowIcon} alt="left arrow" />Back
        </button>

        <section className={styles.contentContainer}>
          <p>Loading...</p>
        </section>
      </>
    );
  }

  if (fetchFailed || commentsArray.length === 0) {
    return (
      <>
        <button className={styles.backButton} onClick={() => navigate(-1)}>
          <img src={leftArrowIcon} alt="left arrow" />Back
        </button>
        <section className={styles.contentContainer}>
          <p>No comments to show!</p>
        </section>
      </>
    );
  }

  return (
    <>
      <button className={styles.backButton} onClick={() => navigate(-1)}>
        <img src={leftArrowIcon} alt="left arrow" />Back
      </button>

      <section className={styles.contentContainer}>
        <Post post={post} />
        <section className={styles.commentsContainer}>
          <h2 className={styles.commentsHeading}>Comments ({numOfComments})</h2>
          {
            commentsArray.map(comment => {
              return <Comment comment={comment} key={comment.id} />;
            })
          }
          <a 
          href={`https://www.reddit.com${pathname}`} 
          className={styles.linkToReddit}
          target="_blank" 
          rel="noreferrer">
            View more comments on Reddit.com
          </a>
        </section>
      </section>
    </>
  );
};

export default Comments;