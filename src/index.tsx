import React from 'react';
import { render } from 'react-dom';
import { configureStore } from './utils/redux/store';
import { persistStore } from 'redux-persist';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import App from './components/App';
import './assets/globalStyles/index.css';

const root = document.getElementById('root');

const store = configureStore();

const persistor = persistStore(store);

render(
  <Provider store={store}>
    <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  root
);
