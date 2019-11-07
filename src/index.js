import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import store from './store';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'react-toastify/dist/ReactToastify.min.css';

ReactDOM.render(
  <Provider store={store}>
    <App />
    <ToastContainer
      autoClose={3000}
      position="top-right"
      hideProgressBar={true}
    />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
