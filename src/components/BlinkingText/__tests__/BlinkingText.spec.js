import React from 'react';
import { shallow } from 'enzyme';

import { getComponentDisplayName } from 'src/utils/displayName';
import { BlinkingText } from '..';

describe(`${getComponentDisplayName(BlinkingText)} component`, () => {
  const renderComponent = props => shallow(<BlinkingText {...props} />);

  it('renders correctly', () => {
    const component = renderComponent({
      children: 'Dummy text'
    });

    expect(component).toMatchSnapshot();
  });
});
