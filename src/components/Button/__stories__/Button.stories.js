import React from 'react';
import { storiesOf } from '@storybook/react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import SyntaxHighlighter from 'react-native-syntax-highlighter';

import { StoryView } from 'storybook/components';
import { Button } from '..';

storiesOf('Button', module)
  .add('default', () => (
    <StoryView
      top={<Button title="Button" />}
      bottom={<SyntaxHighlighter>{'<Button title="Button" />'}</SyntaxHighlighter>}
    />
  ))
  .add('types', () => (
    <StoryView
      top={
        <>
          <Button type="solid" title="Button" />
          <Button type="clear" title="Button" />
          <Button type="outline" title="Button" />
        </>
      }
      bottom={
        <>
          <SyntaxHighlighter>{'<Button type="solid" title="Button" />'}</SyntaxHighlighter>
          <SyntaxHighlighter>{'<Button type="clear" title="Button" />'}</SyntaxHighlighter>
          <SyntaxHighlighter>{'<Button type="outline" title="Button" />'}</SyntaxHighlighter>
        </>
      }
    />
  ))
  .add('icons', () => (
    <StoryView
      top={
        <>
          <Button title="Button" icon={<Icon name="star" />} />
          <Button title="Button" iconRight icon={<Icon name="star" />} />
        </>
      }
      bottom={
        <>
          <SyntaxHighlighter>
            {`<Button
   title="Button"
   icon={<Icon name="star"/>}
/>`}
          </SyntaxHighlighter>
          <SyntaxHighlighter>
            {`<Button
   title="Button"
   iconRight
   icon={<Icon name="star"/>}
/>`}
          </SyntaxHighlighter>
        </>
      }
    />
  ))
  .add('loading', () => (
    <StoryView
      top={<Button loading title="Button" />}
      bottom={<SyntaxHighlighter>{'<Button loading title="Button" />'}</SyntaxHighlighter>}
    />
  ));
