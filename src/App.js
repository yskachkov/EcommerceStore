import React from 'react';
import { Provider } from 'react-redux';

import Login from './screens/Login';
// import SignUp from './screens/SignUp';
// import Main from './screens/Main';
// import ProductDetails from './screens/ProductDetails';
import { store } from './store';

const App = () => (
  <Provider store={store}>
    <Login />
    {/*<SignUp />*/}
    {/*<Main />*/}
    {/*<ProductDetails />*/}
  </Provider>
);

export default App;
