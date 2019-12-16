import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/_App/App.jsx';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux';
import appReducer from './react-redux/index_reducer.js'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';


const composeEnhancers = composeWithDevTools({
});
const store = createStore(
    appReducer,
    composeEnhancers(
        applyMiddleware(thunk),
    )
    
);

ReactDOM.render(
    <Provider store={store}>
        <Router onUpdate={() => window.scrollTo(0, 0)}>
            <App/>
        </Router>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
