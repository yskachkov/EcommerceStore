import React from 'react';
import { Provider } from 'react-redux';

// import Login from './screens/Login';
// import SignUp from './screens/SignUp';
import { Main } from './screens/Main';
import { store } from './store';

const App = () => (
  <Provider store={store}>
    {/*<Login />*/}
    {/*<SignUp />*/}
    <Main />
  </Provider>
);

export default App;
