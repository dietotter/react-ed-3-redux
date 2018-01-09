import { applyMiddleware, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import axios from 'axios'
import promise from 'redux-promise-middleware'

const initialState = {
    fetching: false,
    fetched: false,
    users: [],
    error: null
}

// version w/o redux-promise-middleware
/*const reducer = (state=initialState, action) => {
    switch (action.type){
        case 'FETCH_USERS_START':
            return {...state, fetching: true}
            break
        case 'FETCH_USERS_ERROR':
            return {...state, fetching: false, error: action.payload}
            break
        case 'RECEIVE_USERS':
            return {...state,
                fetching: false,
                fetched: true,
                users: action.payload}
            break
    }
    return state
}

const middleware = applyMiddleware(thunk, createLogger())
const store = createStore(reducer, middleware)

store.dispatch((dispatch) => {
    dispatch({type: 'FETCH_USERS_START'})

    axios.get('http://rest.learncode.academy/api/wstern/users'/!*'http://bbb'*!/) // uncomment 'bbb' to test error handling
        .then((response) => {
            dispatch({type: 'RECEIVE_USERS', payload: response.data})
        })
        .catch((err) => {
            dispatch({type: 'FETCH_USERS_ERROR', payload: err})
        })
})*/

// version with redux-promise-middleware
const reducer = (state=initialState, action) => {
    switch (action.type){
        case 'FETCH_USERS_PENDING':
            return {...state, fetching: true}
            break
        case 'FETCH_USERS_REJECTED':
            return {...state, fetching: false, error: action.payload}
            break
        case 'FETCH_USERS_FULFILLED':
            return {...state,
                fetching: false,
                fetched: true,
                users: action.payload}
            break
    }
    return state
}

const middleware = applyMiddleware(promise(), thunk, createLogger())
const store = createStore(reducer, middleware)

store.dispatch({
    type: 'FETCH_USERS', // automatically adds _PENDING or _REJECTED etc to type
    payload: axios.get('http://rest.learncode.academy/api/wstern/users')
})