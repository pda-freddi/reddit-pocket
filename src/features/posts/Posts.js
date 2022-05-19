import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getPosts, selectPosts, selectIsLoading, selectFetchFailed } from "./postsSlice.js";
import loadingIcon from "../../icons/loading.gif";
import errorIcon from "../../icons/error.png";
import emptyIcon from "../../icons/empty.png";
import Post from "../../components/post/Post.js";
import styles from "./Posts.module.css";

const Posts = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const postsArray = useSelector(selectPosts);
  const isLoading = useSelector(selectIsLoading);
  const fetchFailed = useSelector(selectFetchFailed);

  useEffect(() => {
    dispatch(getPosts(pathname))
  }, [pathname, dispatch]);

  if (isLoading) return (
      <div className={styles.loadingContainer}>
        <img src={loadingIcon} alt="loading icon" className={styles.loadingIcon} />
      </div>
    );

  if (fetchFailed) return (
      <div className={styles.errorMessageContainer}>
        <img src={errorIcon} alt="error icon" className={styles.errorIcon} />
        <p className={styles.errorMessage}>Something went wrong, please try again...</p>
      </div>
    );

  if (postsArray.length === 0) return (
        <div className={styles.emptyMessageContainer}>
          <img src={emptyIcon} alt="empty icon" className={styles.emptyIcon} />
          <p className={styles.emptyMessage}>No posts to show here</p>
        </div>
    );

  return (
    <section className={styles.postsContainer}>
      {
        postsArray.map(post => {
          return <Post post={post} key={post.id} />
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
  );
};

export default Posts;