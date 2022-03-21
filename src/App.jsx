import React, { useState, useEffect } from "react";
import { onSnapshot } from "firebase/firestore";
import { postsRef } from "./firebase";
import Home from "./components/Home";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    onSnapshot(postsRef, (snapshot) => {
      setPosts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
  }, []);

  return (
    <Home
      posts={posts}
      showModal={isModalOpen}
      onModalClose={() => setModalOpen(false)}
      onModalOpen={() => setModalOpen(true)}
    />
  );
};

export default App;
