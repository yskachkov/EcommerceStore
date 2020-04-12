export const getState = state => state.product;

export const getProductDetails = state => getState(state).details;

export const getProductDetailsLoading = state => getState(state).loading;
