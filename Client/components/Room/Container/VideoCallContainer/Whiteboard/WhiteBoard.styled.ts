import styled from "styled-components";

export const StyledWhiteBoard = styled.div`
  width: 100%;
  height: 75%;
  background-color: transparent;
  background-color: white;
  border-radius: 10px;
  position: relative;
  padding: 1px;
  @media (max-width: 768px) {
    height: 500px;
    margin-bottom: 30%;
  }

  .Tools {
    display: flex;
    position: absolute;
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, -50%);
    gap: 2px;
    .item {
      width: 40px;
      height: 40px;
      background-color: #f5f7fb;
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      border: 1px solid rgba(213, 213, 213, 0.6);
      @media (max-width: 768px) {
        width: 20px;
        height: 20px;
      }
    }
    .black {
      background-color: black;
    }
    .red {
      background-color: #e74c3c;
    }
    .yellow {
      background-color: #f1c40f;
    }
    .green {
      background-color: #badc58;
    }
    .blue {
      background-color: #3498db;
    }
    .purple {
      background-color: #9b59b6;
    }
    .orange {
      background-color: #e67e22;
    }
    .pink {
      background-color: #fd79a8;
    }
    .brown {
      background-color: #834c32;
    }
    .grey {
      background-color: grey;
    }
  }

  #whiteboard {
    width: 100%;
    height: 100%;

    @media (max-width: 768px) {
    }
  }
`;
