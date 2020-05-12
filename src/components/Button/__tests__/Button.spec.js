import React from 'react';
import { shallow } from 'enzyme';

import { getComponentDisplayName } from 'src/utils/displayName';
import { ButtonType } from '../config';
import { Button } from '..';

describe(`${getComponentDisplayName(Button)} component`, () => {
  const renderComponent = props => shallow(<Button {...props} />);

  describe('renders', () => {
    describe('correctly for type', () => {
      it(ButtonType.Solid, () => {
        const component = renderComponent({
          type: ButtonType.Solid
        });

        expect(component).toMatchSnapshot();
      });

      it(ButtonType.Clear, () => {
        const component = renderComponent({
          type: ButtonType.Clear
        });

        expect(component).toMatchSnapshot();
      });

      it(ButtonType.Outline, () => {
        const component = renderComponent({
          type: ButtonType.Outline
        });

        expect(component).toMatchSnapshot();
      });
    });

    it('null for unknown type', () => {
      const component = renderComponent({
        type: 'dummy'
      });

      expect(component.isEmptyRender()).toBeTruthy();
    });
  });
});
