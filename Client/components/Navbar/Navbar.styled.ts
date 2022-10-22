import styled from "styled-components";

export const StyledNavbar = styled.nav`
  width: 100%;
  padding: 0px 10%;
  margin: 0px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: fixed;

  @media (max-width: 768px) {
    padding: 0px;
    justify-content: center;
  }

  .logo {
    height: 60px;
    cursor: pointer;
  }
`;
