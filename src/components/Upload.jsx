import React from "react";
import ImageUpload from "./ImageUpload";

const Upload = ({ user }) => {
  return (
    <React.Fragment>
      {user?.displayName ? (
        <div className="app__upload">
          <ImageUpload username={user.displayName} />
        </div>
      ) : (
        <center>
          <h3>Login to upload</h3>
        </center>
      )}
    </React.Fragment>
  );
};

export default Upload;
