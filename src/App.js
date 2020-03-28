import React from 'react';
import { Provider } from 'react-redux';

import Login from './screens/Login';
// import SignUp from './screens/SignUp';
import { store } from './store';

const App = () => (
  <Provider store={store}>
    <Login />
    {/*<SignUp />*/}
  </Provider>
);

export default App;
