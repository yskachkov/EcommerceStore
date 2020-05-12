import React from 'react';
import { View } from 'react-native';
import { shallow } from 'enzyme';

import { getComponentDisplayName } from 'src/utils/displayName';
import { Card } from '..';

describe(`${getComponentDisplayName(Card)} component`, () => {
  const renderComponent = props => shallow(<Card {...props} />);

  it('renders correctly', () => {
    const component = renderComponent({
      children: <View />
    });

    expect(component).toMatchSnapshot();
  });
});
