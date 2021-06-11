import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { App } from './components/App';
import { StoreProvider } from './store/storeMobX';

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
