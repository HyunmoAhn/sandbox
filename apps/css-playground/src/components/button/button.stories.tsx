import type { Meta, StoryObj } from '@storybook/react';
import { ArrowButton, CircleArrowButton } from '.';

const meta: Meta<typeof ArrowButton> = {
  component: ArrowButton,
  title: 'Button',
};
export default meta;
type Story = StoryObj<typeof ArrowButton>;

export const Arrow: Story = {
  args: {
    children: '버튼입니다 안녕하세요',
  },
};

export const CircleArrow: Story = {
  args: {
    children: '버튼입니다 안녕하세요',
  },
  render: (args) => <CircleArrowButton>{args.children}</CircleArrowButton>,
};
