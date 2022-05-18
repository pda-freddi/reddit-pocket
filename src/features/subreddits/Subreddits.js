import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getSubreddits, selectSubreddits, selectIsLoading, selectFetchFailed } from "./subredditsSlice";
import styles from "./Subreddits.module.css";

const Subreddits = () => {
  const dispatch = useDispatch();
  const subredditsArray = useSelector(selectSubreddits);
  const isLoading = useSelector(selectIsLoading);
  const fetchFailed = useSelector(selectFetchFailed);

  useEffect(() => {
    dispatch(getSubreddits());
  }, [dispatch]);

  if (isLoading) return <p>Loading...</p>;

  if (fetchFailed) return <p>Something went wrong, please try again...</p>;

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

