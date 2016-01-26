import React from 'react/addons';
import ReactDOM from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import App from './containers/App';
import rootReducer from './reducers/reducers';

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
)(createStore);

const store = createStoreWithMiddleware(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('folder')
);
