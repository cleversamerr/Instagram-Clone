import React from "react";
import { Modal, Input, Button } from "@material-ui/core";

const SIgnUpModal = ({
  open,
  onClose,
  modalStyle,
  classes,
  username,
  email,
  password,
  onUsernameChange,
  onEmailChange,
  onPasswordChange,
  onRegister,
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
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) => onUsernameChange(e.target.value)}
          />
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
          <Button onClick={onRegister}>Register</Button>
        </form>
      </div>
    </Modal>
  );
};

export default SIgnUpModal;
