import {  GET_HISTORY_SUCCESSFULL ,GET_HISTORY_FAILED,CLEAR_HISTORY_STATE } from "../actions/actionTypes"

const initialHistoryState = {
    history: [],
    caloriesgain:0,
    caloriesburn:0
}

export default function history(state= initialHistoryState, action){
    
    switch(action.type){
        case CLEAR_HISTORY_STATE:
      return {
        ...state,
        error:null,
        history:action.history,
        caloriesgain:action.history.caloriesgain,
        caloriesburn:action.history.caloriesburn
        
      }

        case GET_HISTORY_SUCCESSFULL:
            return {
                ...state,
                history: action.history,
                caloriesgain:action.history.caloriesgain,
                caloriesburn:action.history.caloriesburn
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