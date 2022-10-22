import styled from "styled-components";

export const StyledMember = styled.div`
  height: 20%;
  width: 100%;
  background: linear-gradient(
    0deg,
    rgba(245, 247, 251, 0) 0%,
    rgba(245, 247, 251, 1) 100%
  );
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: var(--font-primary);
  padding: 10px;
  /* color: #9387c7; */
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
    height: 150px;
    margin-bottom: auto;
    background-color: rgba(245, 247, 251, 1);
  }

  .RoomData {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    border-radius: 10px;
    font-size: 0.7rem;
    gap: 15px;

    @media (max-width: 768px) {
      h1 {
        font-size: 1rem;
      }
    }

    .Room {
      color: #9387c7;
    }
  }

  .PhoneControlls {
    width: 160px;
    height: 50px;
    /* From https://css.glass */
    background: rgba(255, 255, 255, 0.02);
    backdrop-filter: blur(2px);
    -webkit-backdrop-filter: blur(1px);
    border: 1px solid #f0edff;

    border-radius: 10px;
    position: absolute;
    bottom: -15%;
    display: flex;
    overflow: hidden;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    .El {
      flex-grow: 1;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .El.Actif {
      background-color: var(--MainColor);
      color: white;
    }

    @media (min-width: 768px) {
      display: none;
    }
  }
`;

export const JoinedPeople = styled.div`
  width: auto;
  border-radius: 10px;
  display: flex;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
  padding: 4px 22px;
  border: 1px solid rgba(121, 121, 121, 0.08);

  @media (max-width: 768px) {
    margin-bottom: 25px;
  }

  .AvatarGroup {
    background-color: red;
    width: auto;
    border-radius: 22px;
    /* border-top-right-radius: 22px;
    border-bottom-right-radius: 22px; */
    background: linear-gradient(
      90deg,
      rgba(245, 247, 251, 1) 0%,
      rgba(235, 238, 245, 1) 100%
    );
    padding: 1px;
  }

  .Title {
    font-family: var(--font-primary);
    font-weight: 500;
  }
`;
