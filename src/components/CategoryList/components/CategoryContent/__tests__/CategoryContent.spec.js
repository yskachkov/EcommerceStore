import React from 'react';
import { shallow } from 'enzyme';

import { getComponentDisplayName } from 'src/utils/displayName';
import { CategoryContent } from '..';

describe(`${getComponentDisplayName(CategoryContent)} component`, () => {
  const renderComponent = props => shallow(<CategoryContent {...props} />);

  it('renders correctly', () => {
    const component = renderComponent({
      data: [
        {
          id: 'dummy-id',
          itemProp: 'dummy prop'
        }
      ]
    });

    expect(component).toMatchSnapshot();
  });
});
