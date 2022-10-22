import React, { useState, useEffect, useRef } from "react";
import { UseSockets } from "contexts/Socket.Context";
import { StyledWhiteBoard } from "./WhiteBoard.styled";
import LayersClearIcon from "@mui/icons-material/LayersClear";
import RestartAltIcon from "@mui/icons-material/RestartAlt";

function index() {
  // CanvasRef
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);

  // const CanvasRef = useRef();
  const { socket } = UseSockets();
  const [isDrawing, setisDrawing] = useState(false);
  const [X, setX] = useState(0);
  const [Y, setY] = useState(0);
  const [Color, setColor] = useState("black");
  const [Drawsize, setDrawsize] = useState(3);
  const [lineOpacity, setLineOpacity] = useState(0.1);
  const [ColorRemote, setColorRemote] = useState("black");
  const [DrawsizeRemote, setDrawsizeRemote] = useState(3);
  // getCanvas call is under join room call


  return (
    <StyledWhiteBoard>
      <canvas
         ref={canvasRef}
        id="whiteboard"

      />
      <div className="Tools">
        <div
          className="black item"
          onClick={() => {
            setColor("black");
          }}
        />
        <div
          className="red item"
          onClick={() => {
            setColor("#e74c3c");
          }}
        />
        <div
          className="yellow item"
          onClick={() => {
            setColor("#f1c40f");
          }}
        />
        <div
          className="green item"
          onClick={() => {
            setColor("#badc58");
          }}
        />
        <div
          className="blue item"
          onClick={() => {
            setColor("#3498db");
          }}
        />
        <div
          className="orange item"
          onClick={() => {
            setColor("#e67e22");
          }}
        />
        <div
          className="purple item"
          onClick={() => {
            setColor("#9b59b6");
          }}
        />
        <div
          className="pink item"
          onClick={() => {
            setColor("#fd79a8");
          }}
        />
        <div
          className="brown item"
          onClick={() => {
            setColor("#834c32");
          }}
        />
        <div
          className="grey item"
          onClick={() => {
            setColor("grey");
          }}
        />
        <div
          className="Eraser item"
          onClick={() => {
            // SerEraser();
          }}
        >
          <LayersClearIcon />
        </div>
        <div
          className="Reset item"
          onClick={() => {
            // clearBoard();
          }}
        >
          <RestartAltIcon />
        </div>
      </div>
    </StyledWhiteBoard>
  );
}

export default index;
