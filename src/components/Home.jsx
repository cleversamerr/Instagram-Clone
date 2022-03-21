import React from "react";
import { Button } from "@mui/material";
import Header from "./common/components/Header";
import SignUpModal from "./common/components/SignUpModal";
import Posts from "./Posts";
import "../css/home.css";

const Home = ({ posts, showModal, onModalClose, onModalOpen }) => {
  return (
    <div className="home">
      {showModal && <SignUpModal title="Sign Up" onClose={onModalClose} />}

      <Header />

      <Button variant="contained" onClick={onModalOpen}>
        Sign Up
      </Button>

      <Posts posts={posts} />
    </div>
  );
};

export default Home;
