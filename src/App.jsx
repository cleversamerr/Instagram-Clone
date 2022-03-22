import React, { useState, useEffect } from "react";
import { db, auth } from "./firebase";
import { getModalStyle, useStyles } from "./services/modalStyles";
import Header from "./components/Header";
import Posts from "./components/Posts";
import SignInModal from "./components/SignInModal";
import SignUpModal from "./components/SignUpModal";
import Upload from "./components/Upload";
import "./css/app.css";

const App = () => {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [posts, setPosts] = useState([]);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [loginOpen, setLoginOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);

        if (!authUser.displayName)
          return authUser.updateProfile({ displayName: username });
      } else {
        setUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [user, username]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(snapshot.docs.map((doc) => ({ id: doc.id, post: doc.data() })))
      );
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .catch((error) => alert(error.message));

    setLoginOpen(false);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .catch((error) => alert(error.message));

    setRegisterOpen(false);
  };

  return (
    <div className="app">
      <SignInModal
        classes={classes}
        email={email}
        modalStyle={modalStyle}
        onClose={setLoginOpen}
        onEmailChange={setEmail}
        onLogin={handleLogin}
        onPasswordChange={setPassword}
        open={loginOpen}
        password={password}
      />

      <SignUpModal
        classes={classes}
        email={email}
        modalStyle={modalStyle}
        onClose={setRegisterOpen}
        onEmailChange={setEmail}
        onPasswordChange={setPassword}
        onRegister={handleRegister}
        onUsernameChange={setUsername}
        open={registerOpen}
        password={password}
        username={username}
      />

      <Header user={user} onSignIn={setLoginOpen} onSignUp={setRegisterOpen} />

      <Posts user={user} posts={posts} />

      <Upload user={user} />
    </div>
  );
};

export default App;
