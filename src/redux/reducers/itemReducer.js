import * as ActionTypes from '../actions/actionTypes';

const events = (state = [], action) => {
    switch(action.type) {
        case 'POST_EVENT': return [ ...state, action.value]
}
const items = (state = [], action) => {
    switch(action.type) {
        case 'POST_ITEM': return [ ...state, action.value]
        case 'DELETE_ITEM':
            const newState = [ ...state ]
            newState.splice(action.value, 1)
            return newState
        default:
            return state
    }
}