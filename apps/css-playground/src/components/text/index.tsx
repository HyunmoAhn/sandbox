import styled from 'styled-components';
import { ReactNode } from 'react';

export const MultiLineTitle = styled.h2`
  position: relative;
  padding-bottom: 24px;
  width: 100%;
  font-size: 36px;
  border-bottom: 5px solid #c7c7c7;

  margin: 10px;

  ::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 0px;
    width: 70px;
    height: 5px;
    background-color: #e5c046;
  }
`;

export const BetweenLineTitle = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 36px;

  ::before,
  ::after {
    content: '';
    width: 70px;
    height: 3px;
    background-color: #e5c046;
  }

  ::before {
    margin-right: 30px;
  }

  ::after {
    margin-left: 30px;
  }
`;

export const BackgroundEnTitle = styled.h2`
  position: relative;
  padding-top: 50px;
  padding-left: 30px;
  font-size: 36px;

  ::before {
    content: attr(data-en);
    position: absolute;
    transform: rotate(-5deg);
    top: 0;
    left: 0;
    color: #e5c046;
    font-size: 80px;
    font-weight: 400;
    font-family: 'Mrs Saint Delafield', cursive;
    z-index: -1;
  }
`;
