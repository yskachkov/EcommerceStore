import React from 'react';
import { shallow } from 'enzyme';

import { getComponentDisplayName } from 'src/utils/displayName';
import { Divider } from '..';

describe(`${getComponentDisplayName(Divider)} component`, () => {
  const renderComponent = props => shallow(<Divider {...props} />);

  describe('renders correctly with', () => {
    it('default props', () => {
      const component = renderComponent();

      expect(component).toMatchSnapshot();
    });

    it('passed props', () => {
      const component = renderComponent({
        size: 10,
        color: '#000'
      });

      expect(component).toMatchSnapshot();
    });
  });
});
