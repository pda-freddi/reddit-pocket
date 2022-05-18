import React from "react";
import Hotbar from "../../hotbar/Hotbar.js";
import Sidebar from "../../sidebar/Sidebar.js";
import Posts from "../../../features/posts/Posts.js";

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