import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  
`;

export const DivBtnMob = styled.div`
  margin-top: 56px;
  display: flex;
  gap: 16px;

  @media (min-width: 770px) {
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
