import React from 'react';
import { shallow } from 'enzyme';

import { getComponentDisplayName } from 'src/utils/displayName';
import { CategoryHeader } from '..';

describe(`${getComponentDisplayName(CategoryHeader)} component`, () => {
  const renderComponent = props => shallow(<CategoryHeader {...props} />);

  it('renders correctly', () => {
    const component = renderComponent({
      title: 'dummy title',
      onViewAll: jest.fn()
    });

    expect(component).toMatchSnapshot();
  });
});
