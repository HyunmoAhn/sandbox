import 'sanitize.css';
import 'sanitize.css/forms.css';
import 'sanitize.css/typography.css';
import { Preview } from '@storybook/react';
import styled from 'styled-components';

const GlobalWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

const preview: Preview = {
  decorators: [
    (Story) => (
      <GlobalWrapper>
        <Story />
      </GlobalWrapper>
    ),
  ],
};

export default preview;
