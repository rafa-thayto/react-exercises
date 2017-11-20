import React from 'react'
import ReactDOM from 'react-dom'
import { combineReducers, createStore} from 'redux'
import { Provider } from 'react-redux'
import Field from './field'
import fieldReducer from './fieldReducer'

// Reducers são funções puras que recebem o estado inicial e a ação, e atualiza o estado
const reducers = combineReducers({
    field: fieldReducer
});

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <Field initialValue='Hello'/>
    </Provider>
, document.getElementById('app'));

