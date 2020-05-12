import React from 'react';
import { shallow } from 'enzyme';

import { getComponentDisplayName } from 'src/utils/displayName';
import { TouchableText } from '..';

describe(`${getComponentDisplayName(TouchableText)} component`, () => {
  const renderComponent = props => shallow(<TouchableText {...props} />);

  it('renders correctly', () => {
    const component = renderComponent({
      children: 'Dummy text'
    });

    expect(component).toMatchSnapshot();
  });
});
