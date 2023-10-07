import styled from 'styled-components';
import image12 from '~/assets/images/pic012.jpg';

const ShadowImage = styled.img`
  box-shadow: 15px 15px 0 #ea987e;
`;

export const FlowerImage = () => {
  return <ShadowImage src={image12} />;
};
