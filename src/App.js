import React, { useState, useEffect } from "react";
import { onSnapshot } from "firebase/firestore";
import { postsRef } from "./firebase";
import Header from "./components/Header";
import Posts from "./components/Posts";
import "./css/app.css";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    onSnapshot(postsRef, (snapshot) => {
      setPosts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
  }, []);

  return (
    <div className="app">
      <Header />
      <Posts posts={posts} />
    </div>
  );
}

export default App;
