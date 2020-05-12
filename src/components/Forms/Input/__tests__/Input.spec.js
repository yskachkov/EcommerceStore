import React from 'react';
import { shallow } from 'enzyme';

import { getComponentDisplayName } from 'src/utils/displayName';
import { Input } from '../Input';

describe(`${getComponentDisplayName(Input)} component`, () => {
  const renderComponent = props => shallow(<Input {...props} />);

  it('renders correctly', () => {
    const component = renderComponent({
      name: 'dummy-name',
      value: 'dummy value',
      placeholder: 'dummy placeholder',
      onChangeText: jest.fn()
    });

    expect(component).toMatchSnapshot();
  });
});
