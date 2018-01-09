import axios from 'axios'

export const fetchTweets = () =>
    (dispatch) => {
        dispatch({type: 'FETCH_TWEETS'})
        axios.get('http://rest.learncode.academy/api/reacttest/tweets')
            .then((response) => { dispatch({type: 'FETCH_TWEETS_FULFILLED', payload: response.data}) })
            .catch((err) => { dispatch({type: 'FETCH_TWEETS_REJECTED', payload: err}) })
    }

export const addTweet = (id, text) => (
    {
        type: 'ADD_TWEET',
        payload: {id, text}
    }
)

export const updateTweet = (id, text) => (
    {
        type: 'UPDATE_TWEET',
        payload: {id, text}
    }
)

export const deleteTweet = (id) => (
    {
        type: 'DELETE_TWEET',
        payload: id
    }
)