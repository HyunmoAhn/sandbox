import type { Meta, StoryObj } from '@storybook/react';
import { MultiLineTitle, BetweenLineTitle, BackgroundEnTitle } from '.';

const meta: Meta<typeof MultiLineTitle> = {
  component: MultiLineTitle,
  title: 'Text',
};
export default meta;
type Story = StoryObj<typeof MultiLineTitle>;

export const MultiLine: Story = {
  args: {
    children: '채용 정보에 관하여',
  },
};

export const BetweenLine: Story = {
  args: {
    children: '채용 정보에 관하여',
  },
  render: (args) => (
    <BetweenLineTitle {...args}>{args.children}</BetweenLineTitle>
  ),
};
export const BackgroundEn: Story = {
  args: {
    titleEn: 'Recruit',
    children: '채용 정보에 관하여',
  },
  render: (args) => (
    <BackgroundEnTitle data-en={args.titleEn}>
      {args.children}
    </BackgroundEnTitle>
  ),
};
