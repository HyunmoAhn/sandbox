import styled from 'styled-components';
import Pic037 from '~/assets/images/pic037.jpg';

export const ShadowImage = styled.img`
  box-shadow: 15px 15px 0 #ea987e;
`;

const ShadeImageWrapper = styled.div`
  position: absolute;

  img {
    position: relative;
    z-index: 2;
  }

  ::before {
    content: '';
    position: absolute;
    bottom: -15px;
    right: -15px;
    width: 100%;
    height: 100%;
    background-image: repeating-linear-gradient(
      -45deg,
      #d34e23 0px,
      #d34e23 2px,
      rgba(0 0 0 / 0) 0%,
      rgba(0 0 0 / 0) 1%
    );
    z-index: 1;
  }
`;

export const ShadeImage = (
  props: React.ImgHTMLAttributes<HTMLImageElement>
) => {
  return (
    <ShadeImageWrapper>
      <img src={props.src} alt={props.alt} {...props} />
    </ShadeImageWrapper>
  );
};

const FrameImageWrapper = styled.div`
  position: absolute;

  ::before,
  ::after {
    content: '';
    position: absolute;
    transform: rotate(-35deg);
    width: 70px;
    height: 25px;
    background-color: #ea987e;
  }

  ::before {
    top: -10px;
    left: -25px;
  }

  ::after {
    bottom: -10px;
    right: -25px;
  }
`;

export const FrameImage = (
  props: React.ImgHTMLAttributes<HTMLImageElement>
) => {
  return (
    <FrameImageWrapper>
      <img src={props.src} alt={props.alt} />
    </FrameImageWrapper>
  );
};

export const BlendImageBackground = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${Pic037});
  background-size: auto 100%;
  background-repeat: no-repeat;
  background-position: center center;

  height: 500px;
  width: 500px;

  img {
    mix-blend-mode: multiply;
  }
`;

export const BlendImage = (
  props: React.ImgHTMLAttributes<HTMLImageElement>
) => {
  return (
    <BlendImageBackground>
      <img src={props.src} alt="" />
    </BlendImageBackground>
  );
};

export const LetterImage = styled.div<{ src: string }>`
  background-clip: text;
  -webkit-background-clip: text;

  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-size: 100% cover;
  color: rgba(0 0 0 / 0);
  font-size: 200px;
  font-weight: 700;
  text-transform: uppercase;
`;
