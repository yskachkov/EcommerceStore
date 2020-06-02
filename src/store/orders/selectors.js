export const getState = state => state.orders;

export const getOrderList = state => getState(state).list;

export const getOrdersLoading = state => getState(state).loading;
