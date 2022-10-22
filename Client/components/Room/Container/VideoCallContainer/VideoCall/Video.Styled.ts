import styled from "styled-components";

export const Video = styled.div`
  width: 100%;
  height: 75%;
  background-color: white;
  border-radius: 10px;
  padding: 5px;
  display: flex;
  flex-direction: row-reverse;
  gap: 10px;
  border: 1px solid rgba(221, 221, 221, 0.8);

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    margin-bottom: 30%;
  }
  .MainVideo {
    height: 100%;
    width: 70%;
    /* background-image: url("/Assets/TestUi/FakeMeetingPhoto.jpg"); */
    background-position: center;
    background-size: cover;
    border-radius: 10px;
    float: right;
    position: relative;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      color: white;
      font-family: var(--font-primary);
      font-size: 1.2rem;
    }

    @media (max-width: 768px) {
      width: 100%;
      height: 300px;
    }

    .PainedIcon {
      position: absolute;
      color: white;
      width: 40px;
      height: 40px;
      right: 10px;
      top: 10px;
      border-radius: 6px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      /* From https://css.glass */
      background: rgba(255, 255, 255, 0.2);
      backdrop-filter: blur(5px);
      -webkit-backdrop-filter: blur(5px);
      /* border: 1px solid #f0edff; */
      /*End*/
    }
    .UserName {
      position: absolute;
      bottom: 10px;
      left: 10px;
      /* From https://css.glass */
      background: rgba(40, 40, 40, 0.2);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      /*End*/
      color: white;
      width: 80px;
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      padding: 5px;
      font-family: var(--font-primary);
    }
  }
  .UserVideos {
    width: 30%;
    height: 100%;
    background-color: #f5f7fb;
    border: 1px solid rgba(221, 221, 221, 0.5);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 5px;
    overflow-y: scroll;
    ::-webkit-scrollbar {
      width: 5px;
    }
    ::-webkit-scrollbar-track {
      background: transparent;
    }
    ::-webkit-scrollbar-thumb {
      background: rgba(221, 221, 221, 0.8);
      border-radius: 5px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: rgba(221, 221, 221, 1);
    }

    @media (max-width: 768px) {
      flex-direction: row;
      width: 100%;
      height: 170px;
      overflow-y: hidden;
      overflow-x: scroll;
      ::-webkit-scrollbar {
        height: 2px;
      }
    }

    .UserVideo {
      width: 100%;
      min-height: 200px;
      background-color: white;
      border-radius: 10px;
      border: 1px solid rgba(221, 221, 221, 0.7);
      display: flex;
      justify-content: center;
      align-items: center;
      background-position: center;
      background-size: cover;
      position: relative;
      overflow: hidden;
      cursor: pointer;
      @media (max-width: 768px) {
        min-height: 150px;
        min-width: 250px;
      }

      .Bg {
        position: absolute;
        width: 120%;
        height: 120%;
        background-position: center;
        filter: blur(14px);
        -webkit-filter: blur(14px);
        &:after {
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          background-color: rgba(147, 135, 199, 0.7);
        }
      }
      .Avatar {
        width: 90px;
        height: 90px;
        background-color: grey;
        border-radius: 50%;
        border: 1px solid white;
        background-position: center;
        background-size: cover;
        z-index: 5;
        animation: animate 1.5s linear infinite;

        @keyframes animate {
          0% {
            box-shadow: 0 0 0 0 var(--MainColor);
          }
          40% {
            box-shadow: 0 0 0 50px rgba(255, 26, 67, 0);
          }
          80% {
            box-shadow: 0 0 0 50px rgba(255, 206, 67, 0);
          }
          100% {
            box-shadow: 0 0 0 rgba(255, 206, 67, 0);
          }
        }
      }
      .Name {
        position: absolute;
        left: 10px;
        bottom: 10px;
        color: white;
        z-index: 4;
        font-family: var(--font-primary);
        font-weight: 400;
      }
    }
  }
`;
