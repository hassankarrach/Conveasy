import React, { useState, useEffect } from "react";
import { StyledContainer } from "@components/Room/Container/chatContainer/Container.styled";
import ChatContainer from "./chatContainer/ChatContainer";
import VideoCallContainer from "./VideoCallContainer";

function Index() {
  return (
    <StyledContainer>
      <VideoCallContainer />
      <ChatContainer />
    </StyledContainer>
  );
}

export default Index;
