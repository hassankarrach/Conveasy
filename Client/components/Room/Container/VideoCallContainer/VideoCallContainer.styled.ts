import styled from "styled-components";

//LeftContainer
export const MainContainer = styled.div`
  width: 70%;
  height: 100vh;
  background: radial-gradient(
        104.33% 104.33% at 2.18% 100%,
        rgba(147, 135, 199, 0.4) 0%,
        rgba(255, 255, 255, 0.947922) 12.5%,
        rgba(255, 255, 255, 0.0001) 100%
      )
      /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */,
    radial-gradient(
        105.64% 105.64% at 105.64% 82.65%,
        rgba(147, 135, 199, 0.5) 0%,
        rgba(255, 255, 255, 0.0001) 100%
      )
      /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */,
    radial-gradient(
        99.36% 99.36% at 4.13% 9.36%,
        rgba(147, 135, 199, 0.6) 0%,
        rgba(255, 255, 255, 0.0001) 100%
      )
      /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */,
    #ffffff;
  background-blend-mode: multiply, multiply, multiply, multiply, normal;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 100vw;
    height: auto;
  }
`;
export const ContentContainer = styled.div`
  width: 100%;
  height: 85%;
  padding: 10px 18px;
  @media (max-width: 768px) {
    width: 100%;
    height: 100vh;
    padding: 0px;
  }
`;
export const VideoCall = styled.div`
  width: 100%;
  height: 100%;
  /* From https://css.glass */
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(221, 221, 221, 0.8);
  /*End*/
  border-radius: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;

  @media (max-width: 768px) {
    border-radius: 0px;
  }
`;
