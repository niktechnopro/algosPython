import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';
//createStore - creates new instance of a store.

let store = createStore(rootReducer, {}, applyMiddleware(thunk));
// console.log('store: ', store);
// console.log('get state: ',store.getState());

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>
	,document.querySelector('#root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
