import React, { memo } from 'react';
import isEqual from 'lodash/isEqual';

import { getComponentDisplayName } from 'src/utils/displayName';

export const withMemo = FunctionComponent => {
  const FunctionComponentWithMemo = memo(
    props => <FunctionComponent {...props} />,
    (prevProps, props) => isEqual(prevProps, props)
  );

  FunctionComponentWithMemo.displayName = `withMemo(${getComponentDisplayName(FunctionComponent)})`;

  return FunctionComponentWithMemo;
};
