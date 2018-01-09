/*
 import React from "react"
 import ReactDOM from "react-dom"
 import { Route, Switch, HashRouter } from "react-router-dom"

 import Layout from "./components/Layout.js";

 const app = document.getElementById('app')

 ReactDOM.render((
 // Since no nested route in v4, parent and children need to be written together
 // check out Layout.js
 <HashRouter>
 <Route path='/' component={Layout}/>
 </HashRouter>),
 app)*/

import { combineReducers, createStore } from 'redux'

const userReducer = (state={}, action) => {

    // const newState = {...state} // variant 1 (but not the best one)
    // switch(action.type){
    //     case 'CHANGE_NAME':
    //         state.name = action.payload
    //         break
    //
    //     case 'CHANGE_AGE':
    //         state.age = action.payload
    //         break
    //
    // }
    // return newState

    // variant 2
    switch(action.type){
        case 'CHANGE_NAME':
            state = {...state, name: action.payload}
            break

        case 'CHANGE_AGE':
            state = {...state, age: action.payload}
            break

    }
    return state
}

const tweetsReducer = (state=[], action) => {
    return state

}

const reducers = combineReducers({
    user: userReducer,
    tweets: tweetsReducer
})

const store = createStore(reducers)

store.subscribe(()=>{
    console.log('store changed', store.getState())
})

store.dispatch({type: 'CHANGE_NAME', payload: 'Will'})
store.dispatch({type: 'CHANGE_AGE', payload: 35})
store.dispatch({type: 'CHANGE_AGE', payload: 36})
// store.dispatch({command: 'DEC', payload: 1000}) // won't work (needs 'type')
// store.dispatch({type: 'DEC', keklol: 1000}) // will work (but 'payload' is standard name). To pass a number of parameters: payload: {..} (pass an object)