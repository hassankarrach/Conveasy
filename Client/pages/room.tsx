import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { UseSockets } from "contexts/Socket.Context";

const Container = dynamic(() => import("@components/Room/Container"));

const room = () => {
  return <Container />;
};

export default room;
