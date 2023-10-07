import type { Meta, StoryObj } from '@storybook/react';
import { FlowerImage } from '.';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof FlowerImage> = {
  component: FlowerImage,
  title: 'Image',
};
export default meta;
type Story = StoryObj<typeof FlowerImage>;

export const Flower: Story = {
  args: {},
};

// export const Heading: Story = {
//   args: {},
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);
//     expect(canvas.getByText(/Welcome to App!/gi)).toBeTruthy();
//   },
// };
