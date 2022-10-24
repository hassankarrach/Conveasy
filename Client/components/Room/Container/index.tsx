import React, { useState, useEffect } from "react";
//SocketContext
import { UseSockets } from "contexts/Socket.Context";
import { useRouter } from "next/router";
import { StyledContainer } from "@components/Room/Container/chatContainer/Container.styled";
import ChatContainer from "./chatContainer/ChatContainer";
import VideoCallContainer from "./VideoCallContainer";

function Index() {
  //SocetContext
  const { socket, room, setRoom, name, setName } = UseSockets();
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  useEffect(() => {
    let UserDetail = JSON.parse(localStorage.getItem("UserDetail")!);

    if (UserDetail === null) {
      router.push("/");
    } else {
      setLoading(false);
      setRoom(UserDetail.room);
      setName(UserDetail.name);
      socket.emit(
        "join",
        {
          name: UserDetail.name,
          room: UserDetail.room,
          gender: UserDetail.gender,
        },
        (error: any) => {
          if (error) {
          }
        }
      );
    }
  }, []);
  return (
    <StyledContainer>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <VideoCallContainer />
          <ChatContainer />
        </>
      )}
    </StyledContainer>
  );
}

export default Index;
