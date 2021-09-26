import { FETCH_SEARCH_RESULTS_SUCCESS ,CLEAR_SEARCH_STATE} from './actionTypes';
import { APIURLS } from '../helpers/urls';
import { getFormBody } from '../helpers/utils';
import { EDIT_HISTORY_FAILED, EDIT_HISTORY_SUCCESSFULL } from './actionTypes';



export function editHistory(date,total,burnout,userId) {

    return (dispatch) => {
  
      const url = APIURLS.editProfile();
  
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


// export function editHistorySucessfull(user) {
//     return {
//       type: EDIT_HISTORY_SUCCESSFULL,
      
//     };
//   }
  
//   export function editHistoryFailed(error) {
//     return {
//       type: EDIT_HISTORY_FAILED,
      
//     };
//   }
  