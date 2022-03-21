import React, { useState } from "react";
import Modal from "./Modal";
import { TextField } from "@mui/material";

const SignUpModal = ({ title, onClose }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  return (
    <Modal title={title} onClose={onClose}>
      <TextField
        required
        type="text"
        id="outlined-required"
        label="Username"
        value={username}
        onChange={(e) => setUsername(e.currentTarget.value)}
        margin="normal"
      />

      <TextField
        required
        type="email"
        id="outlined-required"
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.currentTarget.value)}
        margin="normal"
      />

      <TextField
        required
        type="password"
        id="outlined-required"
        label="Password"
        value={password1}
        onChange={(e) => setPassword1(e.currentTarget.value)}
        margin="normal"
      />

      <TextField
        required
        type="password"
        id="outlined-required"
        label="Password again"
        value={password2}
        onChange={(e) => setPassword2(e.currentTarget.value)}
        margin="normal"
      />
    </Modal>
  );
};

export default SignUpModal;
