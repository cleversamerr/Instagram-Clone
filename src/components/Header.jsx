import React from "react";
import { auth } from "../firebase";
import { Avatar, Button } from "@material-ui/core";

function Header({ user, onSignIn, onSignUp }) {
  return (
    <div className="app__header">
      <img
        className="app__headerImage"
        src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
        alt=""
      />
      {user?.displayName ? (
        <div className="app__headerRight">
          <Button onClick={() => auth.signOut()}>Logout</Button>
          <Avatar
            className="app__headerAvatar"
            alt={user.displayName}
            src="/static/images/avatar/1.jpg"
          />
        </div>
      ) : (
        <form className="app__loginHome">
          <Button onClick={() => onSignIn(true)}>Login</Button>
          <Button onClick={() => onSignUp(true)}>Sign Up</Button>
        </form>
      )}
    </div>
  );
}

export default Header;
