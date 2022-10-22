import styled from "styled-components";

export const StyledFooter = styled.div`
  width: 100%;
  height: 10%;
  /* From https://css.glass */
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid #f0edff;
  /*End*/
  font-family: var(--font-secondary);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  @media (max-width: 768px) {
    position: absolute;
    bottom: 0;
  }

  .RoomID {
    width: 160px;
    height: 45px;
    border-radius: 5px;
    background-color: white;
    border: 1px solid rgba(88, 88, 88, 0.12);
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    @media (max-width: 768px) {
      width: auto;
      padding: 2px 10px;
    }
    .Divider {
      width: 1px;
      height: 100%;
      background: linear-gradient(
        3deg,
        rgba(205, 205, 205, 0) 0%,
        rgba(205, 205, 205, 1) 50%,
        rgba(205, 205, 205, 0) 100%
      );

      @media (max-width: 768px) {
        display: none;
      }
    }
    span {
      font-size: 1rem;
      color: var(--MainColor);

      @media (max-width: 768px) {
        display: none;
      }
    }
    .CopyIcon {
      cursor: pointer;
      transition: 0.2s ease-in-out;
      color: rgba(88, 88, 88, 0.3);
      &:hover {
        color: var(--MainColor);
      }
    }
  }

  .Controls {
    height: 45px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3px;
    .Item {
      width: 45px;
      height: 45px;
      background-color: white;
      border: 1px solid rgba(88, 88, 88, 0.1);
      box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      color: #d9513f;
      &.actif {
        color: #1bc47d;
      }

      &.group {
        width: 90px;
        display: flex;
        overflow: hidden;
        margin-left: 15px;
        @media (max-width: 768px) {
          display: none;
        }

        .El {
          height: 100%;
          width: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #363636;
          &.Actif {
            background-color: var(--MainColor);
            color: white;
          }
        }
      }
    }
  }

  .Leave {
    width: 120px;
    height: 45px;
    border-radius: 5px;
    background-color: #d9513f;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

    @media (max-width: 768px) {
      width: auto;
      padding: 10px;

      span {
        display: none;
      }
    }

    .CallEndIcon {
      margin-right: 10px;
      @media (max-width: 768px) {
        margin-right: 0px;
      }
    }
  }
`;
