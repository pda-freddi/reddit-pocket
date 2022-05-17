import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getPosts, selectPosts, selectIsLoading, selectFetchFailed } from "./postsSlice.js";
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  /* TODO: TREAT LOADING AND ERROR STATES  */

  return (
    <section className={styles.postsContainer}>
    {
      postsArray.map(post => {
        return <Post post={post} key={post.id} />
      })
    }
    </section>
  );
};

export default Posts;