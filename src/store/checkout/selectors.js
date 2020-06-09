export const getState = state => state.checkout;

export const getCartProducts = state => getState(state).products;

export const getCartTotal = state => getState(state).total;

export const getCartTotalQuantity = state => getState(state).totalQuantity;

export const getLoading = state => getState(state).loading;
