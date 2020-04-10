import reduce from 'lodash/reduce';

import { Entities } from './config';

export const initialState = {
  ...reduce(
    Entities,
    (state, entity) => ({
      ...state,
      [entity]: {
        byId: {},
        allIds: [],
        loading: false
      }
    }),
    {}
  ),
  filter: {
    nextCategoryIds: []
  }
};
