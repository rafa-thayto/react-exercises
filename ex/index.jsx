import React from 'react'
import ReactDOM from 'react-dom'
import { combineReducers, createStore} from 'redux'
import { Provider } from 'react-redux'

import Field from './field'

// Reducers são funções puras que recebem o estado inicial e a ação, e atualiza o estado
const reducers = combineReducers({
    field: () => ({ value: 'Opa'})
});

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <Field initialValue='Hello'/>
    </Provider>
, document.getElementById('app'));

