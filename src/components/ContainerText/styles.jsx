import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  padding:0 20px;
  max-width:400px;
`;

export const DivText = styled.div`
  width: 380px;

  h1 {
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%;
    margin-bottom: 24px;
  }

  span {
    font-size: 20px;
    font-style: normal;
    font-weight: 300;
    line-height: 140%;
  }

  @media (max-width: 770px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const DivBtn = styled.div`
  margin-top: 56px;
  display: flex;
  gap: 16px;

  @media (max-width: 770px) {
    display: none;
  }
`;

export const Back = styled(Link)`
  padding: 12px 24px;

  background-color: var(--blue);
  color: var(--gray-02);
  border-radius: 999px;

  border: none;
  text-decoration: none;
  transition: all 0.3s;

  &:hover {
    background-color: var(--blue-light);
    box-shadow: 0px 0px 196px 0px rgba(112, 0, 255, 0.7);
  }
`;

export const Home = styled(Link)`
  padding: 12px 24px;

  background-color: var(--blue);
  color: var(--gray-02);
  border-radius: 999px;

  border: none;
  text-decoration: none;
  transition: all 0.3s;

  &:hover {
    background-color: var(--blue-light);
    box-shadow: 0px 0px 150px 0px rgba(112, 0, 255, 0.7);
  }
`;

