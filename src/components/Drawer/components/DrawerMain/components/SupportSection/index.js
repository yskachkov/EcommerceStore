import React, { memo } from 'react';

import { DrawerCustomItem, DrawerSection } from 'src/components/Drawer/components';

export const SupportSection = memo(({ labelStyle }) => (
  <DrawerSection title="Support">
    <DrawerCustomItem label="Email" iconName="envelope" labelStyle={labelStyle} />
    <DrawerCustomItem label="Call" iconName="phone-volume" labelStyle={labelStyle} />
  </DrawerSection>
));

SupportSection.displayName = 'SupportSection';
