import React from "react";
import { Modal, Input, Button } from "@material-ui/core";

const SignInModal = ({
  open,
  onClose,
  modalStyle,
  classes,
  email,
  password,
  onEmailChange,
  onPasswordChange,
  onLogin,
}) => {
  return (
    <Modal open={open} onClose={() => onClose(false)}>
      <div style={modalStyle} className={classes.paper}>
        <form className="app__login">
          <center>
            <img
              className="app__headerImage"
              src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
              alt=""
            />
          </center>

          <Input
            placeholder="email"
            type="text"
            value={email}
            onChange={(e) => onEmailChange(e.target.value)}
          />

          <Input
            placeholder="password"
            type="password"
            value={password}
            onChange={(e) => onPasswordChange(e.target.value)}
          />

          <Button onClick={() => onLogin()}>Login</Button>
        </form>
      </div>
    </Modal>
  );
};

export default SignInModal;
