import React from 'react';
import { shallow } from 'enzyme';

import { getComponentDisplayName } from 'src/utils/displayName';
import { DataRow } from '..';

describe(`${getComponentDisplayName(DataRow)} component`, () => {
  const renderComponent = props => shallow(<DataRow {...props} />);

  it('renders correctly', () => {
    const component = renderComponent({
      label: 'dummy label',
      value: 'dummy value'
    });

    expect(component).toMatchSnapshot();
  });
});
