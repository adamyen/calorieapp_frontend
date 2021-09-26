import {UPDATE_TOTAL,CLEAR_SEARCH_STATE } from "../actions/actionTypes"

const initialSearchState = {
    total: 0
}

export default function food(state= initialSearchState, action){

    switch(action.type){

        case UPDATE_TOTAL:
            return {
                ...state,
                total: action.total,
                
            }

        case CLEAR_SEARCH_STATE:
            return {
                ...state,
                results:action.results
                } 
        default:
            return state
    }
}