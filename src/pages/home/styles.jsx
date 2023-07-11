import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

const floatAnimation = keyframes`
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(5px, 10px);
  }
  100% {
    transform: translate(0, 0);
  }
`;

export const Container = styled.div`
  height: 100%;
  gap:24px;

  display: flex;
  flex-direction: column;
  align-items:center;

  img{
    width: 230px;
    height: 230px;

    margin-top:200px;
    border: 0;
    animation: ${floatAnimation} 3s infinite linear;
    transition: all 0.4s;

    &:hover{
      filter: drop-shadow(10px 10px 100px rgba(112, 0, 255, 0.698));
    }
  }

  h1 {
    margin-bottom: 24px;
    font-size: 60px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%;
  }
`;

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 12px 24px;

  background-color: var(--blue);
  color: var(--gray-02);
  border-radius: 999px;
  border: none;
  text-decoration: none;
  transition: all 0.3s;

  &:hover {
    background-color: var(--blue-light);
    box-shadow: 0px 0px 150px 0px rgba(112, 0, 255, 0.70);
  }
`;
