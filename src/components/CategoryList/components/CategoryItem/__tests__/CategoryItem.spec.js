import React from 'react';
import { shallow } from 'enzyme';

import { getComponentDisplayName } from 'src/utils/displayName';
import { CategoryItem } from '..';

describe(`${getComponentDisplayName(CategoryItem)} component`, () => {
  const renderComponent = props => shallow(<CategoryItem {...props} />);

  it('renders correctly', () => {
    const component = renderComponent({
      id: 'dummy-id',
      title: 'dummy title',
      products: [],
      onCategoryPress: jest.fn(),
      onProductPress: jest.fn()
    });

    expect(component).toMatchSnapshot();
  });
});
