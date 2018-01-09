import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import Layout from './components/Layout'
import store from './store'

const app = document.getElementById('app')

ReactDOM.render(<Provider store={store}>
    <Layout/>
</Provider>, app)

// (just to draw attention) TODO ===============================================================
/*
// FOR Layout.js THIRD WAY
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { HashRouter, Route } from 'react-router-dom'

import Layout from './components/Layout'
import store from './store'

import { onUserEnter } from './routeCallbacks'

const app = document.getElementById('app')

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <Route path="/" render={() => {
                onUserEnter()
                return <Layout />
            }}>
            </Route>
        </HashRouter>
    </Provider>,
    app)*/
