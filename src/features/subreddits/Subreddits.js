import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getSubreddits, 
         selectSubreddits, 
         selectIsLoading, 
         selectFetchFailed } from "./subredditsSlice";
import loadingIcon from "../../icons/loading.gif";
import warningIcon from "../../icons/warning.png";
import styles from "./Subreddits.module.css";

const Subreddits = () => {
  const dispatch = useDispatch();
  const subredditsArray = useSelector(selectSubreddits);
  const isLoading = useSelector(selectIsLoading);
  const fetchFailed = useSelector(selectFetchFailed);

  useEffect(() => {
    dispatch(getSubreddits());
  }, [dispatch]);

  if (isLoading) return (
    <div className={styles.loadingContainer}>
      <img src={loadingIcon} alt="loading icon" className={styles.loadingIcon} />
    </div>
    );

    if (fetchFailed) return (
    <div className={styles.errorMessageContainer}>
      <img src={warningIcon} alt="warning icon" className={styles.warningIcon} />
      <p className={styles.errorMessage}>Something went wrong</p>
      <p className={styles.errorMessage}>Please try again...</p>
    </div>
  );

  return (
    <section className={styles.subredditsContainer}>
    {
      subredditsArray.map(subreddit => {
        return (
        <article className={styles.subreddit} key={subreddit.id}>
        {
        subreddit.icon ? 
        <img src={subreddit.icon} className={styles.subredditIcon} alt="" /> :
        ""
        }
        <Link to={subreddit.url} className={styles.subredditLink}>{subreddit.name}</Link>
        </article>
        );
      })
    }
    </section>
  );
};

export default Subreddits;

