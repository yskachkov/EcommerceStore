import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import App from '../App';

it('renders correctly', async () => {
  await renderer.act(async () => {
    renderer.create(<App />);
  });
});
