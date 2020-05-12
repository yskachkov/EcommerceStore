import React from 'react';
import { shallow } from 'enzyme';

import { getComponentDisplayName } from 'src/utils/displayName';
import { NonAuthorized } from '..';

describe(`${getComponentDisplayName(NonAuthorized)} component`, () => {
  const renderComponent = props => shallow(<NonAuthorized {...props} />);

  it('renders correctly', () => {
    const component = renderComponent({
      navigate: jest.fn()
    });

    expect(component).toMatchSnapshot();
  });
});
