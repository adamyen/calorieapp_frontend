import { GET_HISTORY_SUCCESSFULL ,GET_HISTORY_FAILED,CLEAR_HISTORY_STATE} from './actionTypes';
import { APIURLS } from '../helpers/urls';
import { getFormBody } from '../helpers/utils';
// import { EDIT_HISTORY_FAILED, EDIT_HISTORY_SUCCESSFULL } from './actionTypes';



export function editHistory(date,total,burnout,userId) {

    return (dispatch) => {
  
      const url = APIURLS.editHistory();
  
      fetch(url,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          //'Authorization': `Bearer ${getAuthTokenFromLocalStorage()}`
        },
        body: getFormBody({
          date,
          total,
          burnout,
          id: userId
        }),
  
      })
      .then(response => response.json())
      .then(data => {
        console.log('EDIT HISTORY data',data);
        if (data.success) {
            console.log('SUCCESS');
        //   dispatch(editHistorySucessfull(data.data.history));
  
          if (data.data.token){
            localStorage.setItem('token',data.data.token)
          }
          return;
        }
  
        // dispatch(editHistoryFailed(data.message))
  
      })
  
    }
  }


export function getHistory(date,userId){

    return (dispatch) => {
  
      const url = APIURLS.getHistory(date,userId);
  
      fetch(url,{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          //'Authorization': `Bearer ${getAuthTokenFromLocalStorage()}`
        },
        // body: getFormBody({
        //   date,
        //   id: userId
        // }),
  
      })
      .then(response => response.json())
      .then(data => {
        console.log('GOT HISTORY data',data);
        if (data.success) {
            console.log('SUCCESS');
            console.log('DATAAAA',data.data.history);
          dispatch(getHistorySucessfull(data.data.history));
  
          if (data.data.token){
            localStorage.setItem('token',data.data.token)
          }
          return;
        }
  
        dispatch(getHistoryFailed(data.message))
  
      })
  
    }
  }

  export function getHistorySucessfull(history) {
    return {
      type: GET_HISTORY_SUCCESSFULL,
      history
    };
  }

  export function getHistoryFailed(error) {
    return {
      type: GET_HISTORY_FAILED,
      error
    };
  }

  export function clearHistoryState (history) {
    return {  
      type: CLEAR_HISTORY_STATE,
      history
    }
  }