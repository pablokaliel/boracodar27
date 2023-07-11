import styled, { keyframes } from 'styled-components';

const floatAnimation = keyframes`
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(10px, 10px);
  }
  100% {
    transform: translate(0, 0);
  }
`;

export const Container = styled.div`
  
`;

export const DivImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 770px) {
    width: 100%;
  }

  div {
    flex-shrink: 0;
    animation: ${floatAnimation} 3s infinite linear;

    @media (max-width: 430px) {
      height: initial;
      width: initial;
    }

    img {
      filter: drop-shadow(0px 0px 70px rgba(112, 0, 255, 0.7));
      width: 100%;
      height: 100%;
      object-fit:cover;

      @media (max-width: 430px) {
        height: 90px;
      }
    }

    .frame {
      border: none;
      width: 230px;
      height: 230px;

      @media (max-width: 400px) {
        height: 120px;
        width: 120px;
      }
    }
  }
`;