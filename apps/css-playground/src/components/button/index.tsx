import styled from 'styled-components';

export const ArrowButton = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  width: 260px;
  color: #333;

  font-size: 28px;
  font-weight: 700;
  text-decoration: none;
  background-color: #90be70;
  border-radius: 20px;

  ::after {
    content: '';
    width: 10px;
    height: 10px;
    border-top: 2px solid #2b550e;
    border-right: 2px solid #2b550e;
    transform: rotate(45deg);
  }
`;

export const CircleArrowButton = styled(ArrowButton)`
  position: relative;

  ::before {
    content: '';
    position: absolute;
    top: 50%;
    right: 30px;
    transform: translateY(-50%);
    width: 30px;
    height: 30px;
    background-color: #cae6b7;
    border-radius: 20px;
  }
`;
