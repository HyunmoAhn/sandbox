import type { Meta, StoryObj } from '@storybook/react';
import {
  ShadowImage,
  ShadeImage,
  FrameImage,
  BlendImage,
  LetterImage,
} from '.';
import image12 from '~/assets/images/pic012.jpg';
import image14 from '~/assets/images/pic014.jpg';
import image37Logo from '~/assets/images/pic037-logo.png';
import image54 from '~/assets/images/pic054.jpg';

const meta: Meta<typeof ShadowImage> = {
  component: ShadowImage,
  title: 'Image',
};
export default meta;
type Story = StoryObj<typeof ShadowImage>;

export const Flower: Story = {
  args: {
    src: image12,
  },
};

export const Cafe: Story = {
  args: {
    src: image14,
  },
  render: (args) => (
    <ShadeImage {...(args as React.ImgHTMLAttributes<HTMLImageElement>)} />
  ),
};

export const Frame: Story = {
  args: {
    src: image14,
  },
  render: (args) => (
    <FrameImage {...(args as React.ImgHTMLAttributes<HTMLImageElement>)} />
  ),
};

export const Blend: Story = {
  args: {
    src: image37Logo,
  },
  render: (args) => (
    <BlendImage {...(args as React.ImgHTMLAttributes<HTMLImageElement>)} />
  ),
};

export const Text: Story = {
  args: {
    src: image54,
    text: 'coffee',
  },
  render: (args) => <LetterImage src={args.src}>{args.text}</LetterImage>,
};
