import React from "react";
import Hotbar from "../../components/hotbar/Hotbar.js";
import Sidebar from "../../components/sidebar/Sidebar.js";
import Posts from "../../features/posts/Posts.js";

const PostsFeed = () => {
  return (
    <>
      <Hotbar />
      <Sidebar />
      <Posts />
    </>
  );
};

export default PostsFeed;