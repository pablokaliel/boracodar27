import styled from "styled-components";
import background from "../../assets/background.png";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;

  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-color: rgba(0, 0, 0, 0.75);
`;

export const Swapper = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 100%;


  @media (max-width: 770px) {
    padding: 0px;
    flex-direction: column;
  }
`;
