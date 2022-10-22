import styled from "styled-components";

export const StylesInput = styled.div<{ width_: string }>`
  width: ${(props) => props.width_};
  height: 50px;
  border: 1px solid #f0edff;
  position: relative;
  border-radius: 5px;
  margin: 3px 0px;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid #f0edff;
  @media (max-width: 768px) {
    width: 100%;
  }

  .Input {
    font-family: var(--font-tertiary);
    font-size: 1.2rem;
    background-color: transparent;
    border: none;
    width: 100%;
    height: 100%;
    padding: 0px 10px;
    color: var(--MainColor);
    &:focus,
    :target {
      outline: none;
    }
  }
  .Join {
    border-radius: 5px;
    font-family: var(--font-tertiary);
    font-size: 1.2rem;
    position: absolute;
    height: 100%;
    width: 150px;
    right: 0;
    background-color: transparent;
    background-color: var(--MainColor);
    color: white;
    border: none;
    cursor: pointer;
    transition: 0.2s ease-in-out;
    &:hover {
      background-color: #6b6291;
    }
  }
`;
