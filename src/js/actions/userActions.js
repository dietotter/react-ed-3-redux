// why export these functions? so that we could easily import them in React.
// e.g.
// import * as user from './userActions'
// user.fetchUser()
// or
// import { setUserName } from '.userActions'
// setUserName('Nick')

export const fetchUser = () => (
    {
        type: 'FETCH_USER_FULFILLED',
        payload: {
            name: 'Will',
            age: 35
        }
    }
)

export const setUserName = (name) => (
    {
        type: 'SET_USER_NAME',
        payload: name
    }
)

export const setAge = (age) => (
    {
        type: 'SET_USER_AGE',
        payload: age
    }
)