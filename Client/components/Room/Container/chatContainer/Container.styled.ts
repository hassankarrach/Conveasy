import styled from "styled-components";

//MainContainer
export const StyledContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: #f5f7fb;
  @media (max-width: 768px) {
    flex-direction: column;
    overflow: hidden;
  }
`;

//RightContainer
export const RightChat = styled.div`
  width: 30%;
  height: 100vh;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const Chat_Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  border-radius: 8px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  border: 1px solid #f2f2f2;
  margin-top: auto;

  @media (max-width: 768px) {
    position: absolute;
    width: 100vw;
    height: 65%;
    left: 0;
    bottom: 10%;
    border-radius: 0px;
  }

  .Switch {
    width: 100%;
    font-family: var(--font-primary);
    display: flex;
    padding: 0px;
    background-color: white;
    border-radius: 8px;
    border: 1px solid #f2f2f2;
    span {
      font-family: var(--font-primary);
      font-size: 1.2rem;
    }
    .item {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px;
      border-radius: 5px;
      cursor: pointer;
      transition: 0.2s ease-in-out;
      .Icon {
        margin-right: 5px;
      }
      &:hover {
        color: var(--MainColor);
      }

      &.Actif {
        color: var(--MainColor);
        background-color: #f5f7fb;
      }
    }
    .Chat {
      width: 50%;
    }
    .Participants {
      width: 50%;
    }
  }
`;
export const MessagesContainer = styled.div`
  height: 100%;
  width: 100%;
  overflow-y: scroll;
  overflow-x: hidden;

  /* width */
  ::-webkit-scrollbar {
    width: 5px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: transparent;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #f2f2f2;
    border-radius: 2px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #e9e9e9;
  }
`;
export const ChatBox = styled.div`
  width: 100%;
  height: 60px;
  background-color: #f5f7fb;
  border-radius: 8px;
  position: relative;
  border: 1px solid rgba(229, 233, 242, 0.3);
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  overflow: hidden;
  .Input {
    font-family: var(--font-secondary);
    font-weight: 300;
    font-size: 1rem;
    background-color: transparent;
    border: none;
    width: 100%;
    height: 100%;
    padding: 0px 10px;
    &:focus,
    :target {
      outline: none;
    }
  }
  .Icon {
    cursor: pointer;
    color: white;
    width: 50px;
    height: 100%;
    background-color: #1bc47d;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 0;
    top: 0;
  }
`;

//Participants

export const Participants = styled.div`
  width: 100%;
  min-height: 200px;
  background-color: white;
  border-radius: 8px;
  padding: 10px 0px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  .Participant {
    width: 100%;
    background-color: #f5f5f5;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    display: flex;
    align-items: center;
    padding: 3px;
    .Avatar {
      width: 45px;
      height: 45px;
      border-radius: 50%;
      background-position: center;
      background-size: cover;
    }
    span {
      font-family: var(--font-primary);
      margin-left: 10px;
      font-size: 1.1rem;
    }
    .UserSets {
      margin-left: auto;
      margin-right: 10px;
      color: #768393;
      display: flex;
      gap: 10px;
      align-items: center;
      justify-content: center;
      .Icon {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
`;
