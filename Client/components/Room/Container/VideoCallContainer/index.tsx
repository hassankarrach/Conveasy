import React, { useState, useEffect } from "react";
import { UseSockets } from "contexts/Socket.Context";
//Components
import Header from "./Header";
import Footer from "./Footer";
import Whiteboard from "./Whiteboard/index";
import Video from "./VideoCall";

import {
  MainContainer,
  ContentContainer,
  VideoCall,
} from "./VideoCallContainer.styled";

const VideoCallContainer = () => {
  const { chatVideo, WhiteBoard_ } = UseSockets();

  return (
    <MainContainer>
      <ContentContainer>
        <VideoCall>
          <Header />
          {chatVideo && <Video />}
          {WhiteBoard_ && <Whiteboard />}
        </VideoCall>
      </ContentContainer>
      <Footer />
    </MainContainer>
  );
};
export default VideoCallContainer;
