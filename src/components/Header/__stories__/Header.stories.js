import React from 'react';
import { storiesOf } from '@storybook/react-native';
import SyntaxHighlighter from 'react-native-syntax-highlighter';

import { StoryView } from 'storybook/components';
import { Header } from '../Header';

storiesOf('Header', module)
  .add('default', () => (
    <StoryView top={<Header />} bottom={<SyntaxHighlighter>{'<Header />'}</SyntaxHighlighter>} />
  ))
  .add('withSearch', () => (
    <StoryView
      top={<Header withSearch />}
      bottom={<SyntaxHighlighter>{'<Header withSearch />'}</SyntaxHighlighter>}
    />
  ))
  .add('withSearchBar', () => (
    <StoryView
      top={<Header withSearchBar />}
      bottom={<SyntaxHighlighter>{'<Header withSearchBar />'}</SyntaxHighlighter>}
    />
  ))
  .add('withCart', () => (
    <StoryView
      top={<Header withCart cartTotalQuantity={10} />}
      bottom={<SyntaxHighlighter>{'<Header withCart cartTotalQuantity={10} />'}</SyntaxHighlighter>}
    />
  ))
  .add('title', () => (
    <StoryView
      top={<Header title="Title" />}
      bottom={<SyntaxHighlighter>{'<Header title="Title" />'}</SyntaxHighlighter>}
    />
  ));
