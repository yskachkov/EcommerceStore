import React from 'react';
import { shallow } from 'enzyme';

import { getComponentDisplayName } from 'src/utils/displayName';
import { CategoryList } from '..';

describe(`${getComponentDisplayName(CategoryList)} component`, () => {
  const renderComponent = props => shallow(<CategoryList {...props} />);

  it('renders correctly', () => {
    const component = renderComponent({
      data: [
        {
          id: 'dummy-id',
          title: 'dummy title',
          products: [],
          onCategoryPress: jest.fn(),
          onProductPress: jest.fn()
        }
      ]
    });

    expect(component).toMatchSnapshot();
  });
});
