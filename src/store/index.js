import {createStore, compose, applyMiddleware} from 'redux';
import thuck from 'redux-thunk';
import Reducers from './Reducers';
const store = createStore(Reducers, {}, compose(applyMiddleware(thuck)));

export default store;
