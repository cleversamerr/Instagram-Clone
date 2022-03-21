import React from "react";
import Post from "./common/components/Post";
import "../css/posts.css";

const Posts = ({ posts }) => {
  return (
    <div className="posts">
      {posts.map(({ id, username, avatarUrl, imageUrl, caption }) => (
        <Post
          key={id}
          username={username}
          avatarUrl={avatarUrl}
          imageUrl={imageUrl}
          caption={caption}
        />
      ))}
    </div>
  );
};

export default Posts;
