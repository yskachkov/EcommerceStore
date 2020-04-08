import { memo, useMemo } from 'react';

import { isAndroidPlatform } from 'src/utils/platform';

export const AndroidElement = memo(({ children }) => {
  const isCurrentPlatformAndroid = useMemo(() => isAndroidPlatform(), []);

  return isCurrentPlatformAndroid ? children : null;
});

AndroidElement.displayName = 'AndroidElement';
