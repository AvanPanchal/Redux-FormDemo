/**
 * @format
 */

import React from 'react'
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

import { createStore, combineReducers } from 'redux';
import { reducer } from 'redux-form';
import { Provider } from 'react-redux';

const rootreducer = combineReducers({
    form: reducer,
})
const store = createStore(rootreducer);

const Appcontainer = () => (
    <Provider store={store}>
        <App />
    </Provider>
)

AppRegistry.registerComponent(appName, () => Appcontainer);
