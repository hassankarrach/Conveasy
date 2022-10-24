import React, { useState, useEffect, useRef } from "react";
import { StyledHeader, StyledCreateRoom, StyledModal } from "./Header.styled";
import { useRouter } from "next/router";
import styles from "@styles/Home.module.css";
//Icons
import AddToQueueIcon from "@mui/icons-material/AddToQueue";
//GlobalComponents
import { StyledInput } from "@components/Global/StyledInput";
import { ButtonStyled } from "@components/Global/Button";
//MaterialUI
import Modal from "@mui/material/Modal";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
//SocketContext
import { UseSockets } from "contexts/Socket.Context";

function Index() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  //ErrorState
  const [Error, setError] = useState("");
  //radioButton
  const [checkedRadio, setcheckedRadio] = useState("");
  //Refs
  const RoomRef: any = useRef();
  const NameRef: any = useRef();

  //SocetContext
  const { socket, room, setRoom, name, setName } = UseSockets();

  const HanddlUserNameInput = (event: any) => {
    setName(event.target.value);
  };
  const HanddlRoomIdInput = (event: any) => {
    setRoom(event.target.value);
  };

  //ModalStates
  const handleOpen = () => {
    setOpen(true);
    // NameRef.current.focus();
  };
  const handleClose = () => setOpen(false);

  //RadioGRP event
  const HandleRadioChecked = (event: any) => {
    setcheckedRadio(event.target.value);
  };

  const HandleJoinRoom = (e: any) => {
    if (name !== "" && room !== "" && checkedRadio !== "") {
      try {
        socket.emit(
          "join",
          { name, room, gender: checkedRadio },
          (error: any) => {
            if (error) {
              alert(error);
            } else {
              e.preventDefault();
              router.push("/room");
            }
          }
        );
      } catch (error) {
        console.log(error);
      }
    } else {
      setError("please fill all required fields.");
    }
  };

  return (
    <StyledHeader>
      <div className="Elipse24"></div>
      <div className="Elipse25"></div>

      <div className="Left">
        <div className="HeroData">
          <h1>free video meetings.</h1>
          <h3>
            Conveasy secure, reliable video platform powers all of your
            communication needs, including meetings, chat, phone, and
            collaborative white-board.
          </h3>
          <div className="Buttons">
            <StyledCreateRoom onClick={handleOpen}>
              Create Room <AddToQueueIcon className="Icon" />
            </StyledCreateRoom>

            <StyledInput
              PlaceHolder="Enter Room Code"
              ButtonText="Enter"
              Width="70%"
              HandleJoinRoom={handleOpen}
            />
          </div>

          <Modal open={open} onClose={handleClose}>
            <StyledModal>
              <FormLabel className="Label">Room ID :</FormLabel>
              <input
                className="Input"
                placeholder={`${room ? room : "ENTER ROOM ID!"}`}
                onChange={HanddlRoomIdInput}
                ref={RoomRef}
              />
              <FormLabel className="Label">User Name :</FormLabel>
              <input
                className="Input"
                placeholder="ENTER USERNAME!"
                onChange={HanddlUserNameInput}
                ref={NameRef}
              />
              <FormLabel className="Label">Gender :</FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                onChange={HandleRadioChecked}
                className="RdioGrp"
              >
                <FormControlLabel
                  value="female"
                  control={<Radio size="small" />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio size="small" />}
                  label="Male"
                />
              </RadioGroup>

              <button onClick={HandleJoinRoom}>Join</button>

              {Error !== "" && <p>{Error}</p>}
            </StyledModal>
          </Modal>
        </div>
      </div>
      <div className="Right">
        <img className="MainHero" src={"/Assets/Hero/Main.png"} />
        {/* <img className="RedHat" src={"/Assets/Hero/RedHat.png"} /> */}
        <div className="Mark">
          <img
            className={`MadeInMorocco ${styles.rotating}`}
            src={"/Assets/Hero/MadeInMorocco.png"}
          />

          <img className="Star" src={"/Assets/Hero/MoroccanStar.png"} />
        </div>
      </div>
    </StyledHeader>
  );
}

export default Index;
