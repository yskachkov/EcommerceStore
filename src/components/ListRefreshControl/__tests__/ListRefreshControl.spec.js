import React from 'react';
import { shallow } from 'enzyme';

import { getComponentDisplayName } from 'src/utils/displayName';
import { ListRefreshControl } from '..';

describe(`${getComponentDisplayName(ListRefreshControl)} component`, () => {
  const renderComponent = props => shallow(<ListRefreshControl {...props} />);

  it('renders correctly', () => {
    const component = renderComponent();

    expect(component).toMatchSnapshot();
  });
});
