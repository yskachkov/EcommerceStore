import React from 'react';
import { shallow } from 'enzyme';

import { getComponentDisplayName } from 'src/utils/displayName';
import { LoadingSpinner } from '..';

describe(`${getComponentDisplayName(LoadingSpinner)} component`, () => {
  const renderComponent = props => shallow(<LoadingSpinner {...props} />);

  describe('renders correctly with', () => {
    it('default props', () => {
      const component = renderComponent();

      expect(component).toMatchSnapshot();
    });

    it('with passed props', () => {
      const component = renderComponent({
        size: 10,
        color: '#000'
      });

      expect(component).toMatchSnapshot();
    });
  });
});
