import React from "react";
import FlipMove from "react-flip-move";
import InstagramEmbed from "react-instagram-embed";
import Post from "./Post";

const Posts = ({ user, posts }) => {
  return (
    <div className="app__posts">
      <div className="app__postsLeft">
        <FlipMove>
          {posts.map(({ id, post }) => (
            <Post
              user={user}
              key={id}
              postId={id}
              username={post.username}
              caption={post.caption}
              imageUrl={post.imageUrl}
            />
          ))}
        </FlipMove>
      </div>

      <div className="app__postsRight">
        <InstagramEmbed
          url="https://www.instagram.com/p/B_uf9dmAGPw/"
          maxWidth={320}
          hideCaption={false}
          containerTagName="div"
          protocol=""
          injectScript
          onLoading={() => {}}
          onSuccess={() => {}}
          onAfterRender={() => {}}
          onFailure={() => {}}
        />
      </div>
    </div>
  );
};

export default Posts;
