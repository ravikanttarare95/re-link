// import React from "react";
import { useEffect } from "react";
import Navbar from "./../components/Navbar";
import getLoggedInUser from "./../utils/getLoggedInUser.ts";
import { useNavigate } from "react-router";

function ChatPage() {
  const navigate = useNavigate();

  useEffect((): void => {
    const user = getLoggedInUser();
    if (!user) {
      navigate("/", { replace: true });
    }
  }, []);

  return (
    <>
      <Navbar />
      ChatPage
    </>
  );
}

export default ChatPage;
