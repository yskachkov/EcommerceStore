import React from 'react';
import { shallow } from 'enzyme';

import { getComponentDisplayName } from 'src/utils/displayName';
import { ProductPreview } from '..';

describe(`${getComponentDisplayName(ProductPreview)} component`, () => {
  const renderComponent = props => shallow(<ProductPreview {...props} />);

  it('renders correctly', () => {
    const component = renderComponent({
      data: [
        {
          title: 'dummy title'
        }
      ],
      onPress: jest.fn()
    });

    expect(component).toMatchSnapshot();
  });
});
