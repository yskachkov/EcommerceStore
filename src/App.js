import React from 'react';
import { Provider } from 'react-redux';

import textConnector from './store/connectors/text';
import { Main } from './screens/Main';
import { store } from './store';

const MainWithText = textConnector(Main);

const App = () => (
  <Provider store={store}>
    <MainWithText />
  </Provider>
);

export default App;
