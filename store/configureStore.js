import { createStore } from 'redux';
import rootReducer from '../reducers/reducers';

let store = createStore(rootReducer, window.STATE_FROM_SERVER);
