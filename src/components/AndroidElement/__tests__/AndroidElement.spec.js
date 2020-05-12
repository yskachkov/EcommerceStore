import React from 'react';
import { View } from 'react-native';
import { shallow } from 'enzyme';

import * as PlatformUtils from 'src/utils/platform';
import { getComponentDisplayName } from 'src/utils/displayName';
import { AndroidElement } from '..';

describe(`${getComponentDisplayName(AndroidElement)} component`, () => {
  const renderComponent = children => shallow(<AndroidElement>{children}</AndroidElement>);

  describe('renders', () => {
    it('null for ios', () => {
      jest.spyOn(PlatformUtils, 'isAndroidPlatform').mockImplementation(() => false);

      const component = renderComponent(<View />);

      expect(component.isEmptyRender()).toBeTruthy();
    });

    it('children for android', () => {
      jest.spyOn(PlatformUtils, 'isAndroidPlatform').mockImplementation(() => true);

      const dummyChildren = <View />;
      const component = renderComponent(dummyChildren);

      expect(component.containsMatchingElement(dummyChildren)).toBeTruthy();
    });
  });
});
