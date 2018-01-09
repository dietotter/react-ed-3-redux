// FIRST WAY
import React from "react"
import { connect } from 'react-redux'

import { fetchUser } from '../actions/userActions'
import { fetchTweets } from '../actions/tweetsActions'

// @connect() wraps Layout component
// when we load Layout component, we're going to get @connect() component,
// which renders Layout component and injects props into it
// (simple way to inject props into Layout, without messing with the component itself)
// Use @connect() on 'smart' components, and they will pass props to 'dumb' components
// 'dumb' components should not be tied with redux

/* takes function with a store parameter
 as a first parameter and whatever it returns becomes props
 */
@connect((store) => {
    return {
        user: store.user.user,
        tweets: store.tweets.tweets,
    }
} )
export default class Layout extends React.Component {
    // ? is it ok to use componentWillMount() ?
    componentWillMount(){
        this.props.dispatch(fetchUser())
    }

    fetchTweets(){
        this.props.dispatch(fetchTweets())
    }

    render() {
        const { user, tweets } = this.props

        if(!tweets.length)
            return <button onClick={this.fetchTweets.bind(this)}>load tweets</button>

        const mappedTweets = tweets.map(tweet => <li>{tweet.text}</li>)

        return (
            <div>
                <h1>{this.props.user.name}</h1>
                <ul>{mappedTweets}</ul>
            </div>
        )
    }
}

// (just to draw attention) TODO ===============================================================
/*// FIRST WAY (another way to organize code)
import React from 'react'
import { connect } from 'react-redux'

import { fetchUser } from '../actions/userActions.js'
import { fetchTweets } from '../actions/tweetsActions.js'

class Layout extends React.Component {
    componentWillMount(){
        this.props.dispatch(fetchUser())
    }

    fetchTweets(){
        this.props.dispatch(fetchTweets())
    }

    render() {
        const { user, tweets } = this.props

        if(!tweets.length)
            return <button onClick={this.fetchTweets.bind(this)}>load tweets</button>

        const mappedTweets = tweets.map(tweet => <li>{tweet.text}</li>)

        return (
            <div>
                <h1>{this.props.user.name}</h1>
                <ul>{mappedTweets}</ul>
            </div>
        )
    }
}

const mapStateToProps = (store) => ({
    user: store.user.user,
    tweets: store.tweets.tweets
})
export default connect(mapStateToProps)(Layout)*/

// (just to draw attention) TODO ===============================================================
/*
// SECOND WAY
import React from "react"
import { connect } from 'react-redux'

import { bindActionCreators } from 'redux'
import * as userActions from '../actions/userActions'
import * as tweetsActions from '../actions/tweetsActions'

@connect((store) => ({
    user: store.user.user,
    tweets: store.tweets.tweets
}), (dispatch) => ({
    userActions: bindActionCreators(userActions, dispatch),
    tweetsActions: bindActionCreators(tweetsActions, dispatch)
}) )

// this way, if we need to render some child components and we need to dispatch some actions in them,
// we just pass this.props.userActions (for example) as props, and call this.props.fetchUser() in a child component
// E.g. (while rendering Layout component):
// return (
//     <div>
//         <h1>Kek</h1>
//         <Footer {...this.props.userActions} text={'Sometext'} />
//     </div>
// )

export default class Layout extends React.Component {
    componentWillMount(){
        this.props.userActions.fetchUser()
    }

    fetchTweets(){
        this.props.tweetsActions.fetchTweets()
    }

    render() {
        const { user, tweets } = this.props

        if(!tweets.length)
            return <button onClick={this.fetchTweets.bind(this)}>load tweets</button>

        const mappedTweets = tweets.map(tweet => <li>{tweet.text}</li>)

        return (
            <div>
                <h1>{this.props.user.name}</h1>
                <ul>{mappedTweets}</ul>
            </div>
        )
    }
}*/

// (just to draw attention) TODO ===============================================================
/*
// THIRD WAY ( routeCallbacks.js added + client.js changes)
// adds some reusability to components, as no componentWillMount(),
// and we call 'fetchUser()', which was there, in this component's Route (client.js)
// (? not sure, whether its the better way, need to find out ?)
import React from "react"
import { connect } from 'react-redux'

import { fetchTweets } from '../actions/tweetsActions'

@connect((store) => ({
    user: store.user.user,
    tweets: store.tweets.tweets
}))

export default class Layout extends React.Component {

    fetchTweets(){
        this.props.dispatch(fetchTweets())
    }

    render() {
        const { user, tweets } = this.props

        if(!tweets.length)
            return <button onClick={this.fetchTweets.bind(this)}>load tweets</button>

        const mappedTweets = tweets.map(tweet => <li>{tweet.text}</li>)

        return (
            <div>
                <h1>{this.props.user.name}</h1>
                <ul>{mappedTweets}</ul>
            </div>
        )
    }
}*/
