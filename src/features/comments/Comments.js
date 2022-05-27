import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getComments,
         selectIsLoading,
         selectFetchFailed,
         selectPost,
         selectComments
                        } from "./commentsSlice.js";
import { getFormattedNumOfComments } from "../../utils/helpers/getFormattedDetails.js";
import loadingIcon from "../../icons/loading.gif";
import emptyIcon from "../../icons/empty.png";
import errorIcon from "../../icons/error.png";
import BackButton from "../../components/buttons/backButton/BackButton.js";
import Post from "../../components/post/Post.js";
import Comment from "../../components/comment/Comment.js";
import styles from "./Comments.module.css";

const Comments = () => {

  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const commentsArray = useSelector(selectComments);
  const post = useSelector(selectPost);
  const isLoading = useSelector(selectIsLoading);
  const fetchFailed = useSelector(selectFetchFailed);

  const numOfComments = getFormattedNumOfComments(post.numOfComments);

  useEffect(() => {
    dispatch(getComments(pathname));
  }, [dispatch, pathname]);

  if (isLoading) return (
    <>
      <BackButton />
      <div className={styles.loadingContainer}>
        <img src={loadingIcon} alt="loading icon" className={styles.loadingIcon} />
      </div>
    </>

  );

  if (fetchFailed) return (
    <>
      <BackButton />
      <div className={styles.errorMessageContainer}>
        <img src={errorIcon} alt="error icon" className={styles.errorIcon} />
        <p className={styles.errorMessage}>Something went wrong, please try again...</p>
      </div>
    </>
  );

  if (commentsArray.length === 0) return (
    <>
      <BackButton />
      <div className={styles.emptyMessageContainer}>
        <img src={emptyIcon} alt="empty icon" className={styles.emptyIcon} />
        <p className={styles.emptyMessage}>No comments to show here</p>
      </div>
    </>
  );

  return (
    <>
      <BackButton />
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