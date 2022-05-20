import React from "react";
import Comments from "../../features/comments/Comments.js";
import Sidebar from "../../components/sidebar/Sidebar.js";

const UniquePost = () => {
  return (
    <>
      <Sidebar />
      <Comments />
    </>
  );
};

export default UniquePost;