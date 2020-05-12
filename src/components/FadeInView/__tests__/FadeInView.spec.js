import React from 'react';
import { Text } from 'react-native';
import { shallow } from 'enzyme';

import { getComponentDisplayName } from 'src/utils/displayName';
import { FadeInView } from '..';

describe(`${getComponentDisplayName(FadeInView)} component`, () => {
  const renderComponent = props => shallow(<FadeInView {...props} />);

  it('renders correctly', () => {
    const component = renderComponent({
      children: <Text>Dummy children</Text>
    });

    expect(component).toMatchSnapshot();
  });
});
