import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { StoreProvider } from 'easy-peasy';

import './index.css';
import App from './components/App';
import store from './store';

ReactDOM.render(
  <Router>
    <StoreProvider store={store}>
      <App />
    </StoreProvider>
  </Router>,
  document.getElementById('root'),
);
