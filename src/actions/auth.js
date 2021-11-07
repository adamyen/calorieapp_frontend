import { APIURLS } from '../helpers/urls';
import {
  LOGIN_START,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  AUTHENTICATE_USER,
  LOG_OUT,
  SIGNUP_START,
  SIGNUP_FAILED,
  SIGNUP_SUCCESS,
  CLEAR_AUTH_STATE,
  EDIT_USER_SUCCESSFULL,
  EDIT_USER_FAILED
} from './actionTypes';
import { getFormBody } from '../helpers/utils';

export function startLogin() {
  return {
    type: LOGIN_START,
  };
}

export function loginFailed(errorMessage) {
  return {
    type: LOGIN_FAILED,
    error: errorMessage,
  };
}

export function loginSuccess(user) {
  return {
    type: LOGIN_SUCCESS,
    user,
  };
}

export function login(username, password) {
  return (dispatch) => {
    dispatch(startLogin());
    const url = APIURLS.login();
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
      .then(res => res.json())
      .then((data) => {
        if (data.accessToken) {
          localStorage.setItem('token', data.accessToken);
          dispatch(loginSuccess());
          return;
        }
      })
      .catch(e => {
        console.error('Error', e);
        dispatch(loginFailed());
      });
  };
}

export function signup({ username, email, password }) {
  return (dispatch) => {
    const url = APIURLS.signup();
    const body = JSON.stringify({ username, email, password, roles: ['user'] });
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body,
    })
      .then(res => res.json())
      .then((data) => {
        login(username, password);
      })
      .catch(e => {
        console.error('Error', e);
        dispatch(signupFailed());
      });
  };
}

export function startSingup() {
  return {
    type: SIGNUP_START,
  };
}

export function signupFailed(error) {
  return {
    type: SIGNUP_FAILED,
    error,
  };
}

export function signupSuccessful(user) {
  return {
    type: SIGNUP_SUCCESS,
    user,
  };
}

export function authenticateUser(user) {
  return {
    type: AUTHENTICATE_USER,
    user,
  };
}

export function logoutUser() {
  return {
    type: LOG_OUT,
  };
}

export function clearAuthState () {
  return {  
    type: CLEAR_AUTH_STATE
  }
}


export function editUserSucessfull(user) {
  return {
    type: EDIT_USER_SUCCESSFULL,
    user
  };
}

export function editUserFailed(error) {
  return {
    type: EDIT_USER_FAILED,
    error
  };
}

export function editUser(height,weight,goal,target,userId) {

  return (dispatch) => {

    const url = APIURLS.editProfile();

    fetch(url,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        //'Authorization': `Bearer ${getAuthTokenFromLocalStorage()}`
      },
      body: getFormBody({
        height,
        weight,
        goal,
        target,
        id: userId
      }),

    })
    .then(response => response.json())
    .then(data => {
      console.log('EDIT PROFILE data',data);
      if (data.success) {
        dispatch(editUserSucessfull(data.data.user));

        if (data.data.token){
          localStorage.setItem('token',data.data.token)
        }
        return;
      }

      dispatch(editUserFailed(data.message))

    })

  }
}
