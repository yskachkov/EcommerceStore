import { memo } from 'react';

import { isAndroidPlatform } from 'src/utils/platform';

export const AndroidElement = memo(({ children }) => (isAndroidPlatform() ? children : null));

AndroidElement.displayName = 'AndroidElement';
