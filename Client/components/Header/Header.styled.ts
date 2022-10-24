import styled from "styled-components";

export const StyledHeader = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  /* background-image: url("./Assets/Hero/bg.jpg");
  background-position: center;
  background-size: cover; */
  position: relative;
  overflow: hidden;
  /* background-color: #151515; */
  @media (max-width: 768px) {
    &:after {
      position: absolute;
      width: 100%;
      height: 100%;
      content: "";
      background: linear-gradient(
        0deg,
        rgba(245, 247, 251, 1) 40%,
        rgba(245, 247, 251, 0) 80%
      );
      z-index: 998;
    }
  }

  .Elipse24 {
    position: absolute;
    width: 1642px;
    height: 686px;
    right: -55%;
    bottom: -70%;
    background: #9387c7;
    filter: blur(210px);
    transform: rotate(65.64deg);
    @media (max-width: 768px) {
      right: 50%;
      bottom: -70%;
      position: absolute;
      &:after {
        position: absolute;
        width: 100%;
        height: 100%;
        content: "";
        background-color: black;
      }
    }
  }
  .Elipse25 {
    position: absolute;
    width: 1324px;
    height: 1324px;
    left: -70%;
    top: -90%;
    background: #0819b5;
    filter: blur(610px);
    transform: rotate(65.64deg);
    @media (max-width: 768px) {
      left: -320%;
      top: -110%;
    }
  }
  //EndMeshBackground.
  .Left {
    width: 70%;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 10%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    @media (max-width: 768px) {
      z-index: 999;
      min-width: 100%;
      padding: 10% 4%;
    }

    .HeroData {
      padding: 30px 0px;
      display: flex;
      flex-direction: column;
      width: 80%;
      @media (max-width: 768px) {
        width: 100%;
        height: 100%;
        padding: 0px;
        justify-content: flex-end;
      }

      h1 {
        font-family: var(--font-tertiary);
        font-size: 3.2rem;
        color: var(--MainColor);
        margin: 10px 0px;
      }
      h3 {
        font-family: var(--font-primary);
        font-weight: 100;
        color: #3d3d3d;
        line-height: 26px;
        margin-bottom: 50px;
      }

      .Buttons {
        height: 100px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 10px;
        @media (max-width: 768px) {
          flex-direction: column;
          height: auto;
        }
      }

      .ModalContainer {
        padding: 20px;
        width: 300px;
        height: 200px;
        background-color: white;
      }
    }
  }

  .Right {
    width: 30%;
    height: 100%;
    display: flex;
    position: relative;
    justify-content: flex-end;
    align-items: flex-end;
    .MainHero {
      height: 90%;
      z-index: 1;
      @media (max-width: 768px) {
        position: absolute;
        right: -100%;
      }
    }
    .RedHat {
      position: absolute;
      width: 100px;
      top: 10%;
      right: 40%;
      transform: rotate(20deg);
      animation: MoveUpDown 2.5s linear infinite;
      z-index: 2;
    }
    .Mark {
      z-index: 3;
      position: absolute;
      width: 140px;
      height: 140px;
      background-color: white;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      bottom: 20%;
      right: 5%;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 50%;
      backdrop-filter: blur(6.5px);
      -webkit-backdrop-filter: blur(6.5px);
      border: 1px solid rgba(255, 255, 255, 0.37);
      @media (max-width: 768px) {
      }
      .MadeInMorocco {
        width: 99%;
        height: 99%;
      }
      .Star {
        position: absolute;
        color: green;
        width: 60px;
      }
    }
  }

  //Animation.
  @keyframes MoveUpDown {
    0%,
    100% {
      top: 12%;
    }
    50% {
      top: 13%;
    }
  }
`;

export const StyledCreateRoom = styled.button`
  width: 30%;
  height: 50px;
  border-radius: 5px;
  cursor: pointer;
  font-family: var(--font-tertiary);
  font-size: 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--MainColor);
  transition: 0.2s ease-in-out;
  /* From https://css.glass */
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(107, 98, 145, 0.3);
  &:hover {
    color: #6b6291;
  }
  .Icon {
    margin-left: 10px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const StyledModal = styled.div`
  padding: 30px 3%;
  width: 500px;
  height: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(9px);
  -webkit-backdrop-filter: blur(9px);
  border: 1px solid rgba(255, 255, 255, 0.8);
  outline: none;
  border-radius: 8px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  gap: 10px;

  .Input {
    background-color: rgba(255, 255, 255, 0.5);
    font-family: var(--font-primary);
    font-size: 1rem;
    border: none;
    width: 100%;
    height: 40px;
    padding: 0px 10px;
    color: var(--MainColor);
    border: 1px solid rgba(185, 185, 185, 0.5);
    border-radius: 4px;
    &:focus,
    :target {
      outline: none;
    }
  }

  .Label {
  }

  button {
    height: 40px;
    background-color: var(--MainColor);
    color: white;
    border: 1px solid rgba(185, 185, 185, 0.5);
    border-radius: 4px;
    margin-top: auto;
    font-size: 1rem;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    width: 90%;
  }
`;
