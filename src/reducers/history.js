import {  GET_HISTORY_SUCCESSFULL ,GET_HISTORY_FAILED,CLEAR_HISTORY_STATE } from "../actions/actionTypes"

const initialHistoryState = {
    history: [],
}

export default function history(state= initialHistoryState, action){
    
    switch(action.type){
        case CLEAR_HISTORY_STATE:
      return {
        ...state,
        error:null
      }

        case GET_HISTORY_SUCCESSFULL:
            return {
                ...state,
                history: action.history
            }

        case GET_HISTORY_FAILED:
                return {
                  ...state,
                  error: action.error
                }

       
        default:
            return state
    }
}