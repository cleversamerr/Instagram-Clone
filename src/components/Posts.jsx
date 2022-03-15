import React from "react";
import Post from "./Post";

function Posts({ posts }) {
  return (
    <div className="app__posts">
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
}

export default Posts;
