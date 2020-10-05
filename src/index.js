import React from 'react';
import createSagaMiddleware from 'redux-saga';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import App from './app';
import rootSaga from './sagas';
import 'bootstrap/dist/css/bootstrap.css';
import "./index.scss";


if (process.env.NODE_ENV !== 'production') {
   console.log('Looks like we are in development mode!');
 }
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
   reducer,
   applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSaga);
render(
   <Provider store={store}>
     <App />
   </Provider>,
document.getElementById('root'));
if (module.hot) { module.hot.accept(App);}