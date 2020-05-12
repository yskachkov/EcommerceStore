import React from 'react';
import { shallow } from 'enzyme';

import { getComponentDisplayName } from 'src/utils/displayName';
import { Preview } from '..';

describe(`${getComponentDisplayName(Preview)} component`, () => {
  const renderComponent = props => shallow(<Preview {...props} />);

  it('renders correctly', () => {
    const component = renderComponent({
      title: 'dummy title',
      imageUri: 'image uri',
      onPress: jest.fn()
    });

    expect(component).toMatchSnapshot();
  });
});
