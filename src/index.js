/*import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './components/App';
import { configureStore } from './store';
import store from './store';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);*/

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from './store';

import './index.css';
import App from './App';
const reduxStore = configureStore();

/*ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);*/

const MyAppWithStore = () => (
  <Provider store={reduxStore}>
    <App />
  </Provider>
);

ReactDOM.render(<MyAppWithStore />, document.getElementById('root'));


