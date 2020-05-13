import React from 'react';
import { storiesOf } from '@storybook/react-native';
import SyntaxHighlighter from 'react-native-syntax-highlighter';

import { StoryView } from 'storybook/components';
import { Divider } from '..';

storiesOf('Divider', module)
  .add('default', () => (
    <StoryView top={<Divider />} bottom={<SyntaxHighlighter>{'<Divider />'}</SyntaxHighlighter>} />
  ))
  .add('size and color', () => (
    <StoryView
      top={<Divider size={10} color="blue" />}
      bottom={<SyntaxHighlighter>{'<Divider size={10} color="blue" />'}</SyntaxHighlighter>}
    />
  ));
