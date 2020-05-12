import React from 'react';
import { shallow } from 'enzyme';

import { getComponentDisplayName } from 'src/utils/displayName';
import { CardList } from '..';

describe(`${getComponentDisplayName(CardList)} component`, () => {
  const renderComponent = props => shallow(<CardList {...props} />);

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
