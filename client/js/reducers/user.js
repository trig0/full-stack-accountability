import * as actions from '../actions/actions';

const initialState = {
  user: '',
  isLoggedIn: false,
  fail: false,
  error: ''
};

const userReducer = (state=initialState, action) => {

  if (action.type === actions.LOGIN_SUCCESS) {
      console.log('Login success')
    return {...state,
      user: action.username,
      isLoggedIn: true
    }
  }
  if (action.type === actions.LOGOUT_SUCCESS) {
      console.log('Logout success')
    return {...state,
      isLoggedIn: false,
      fail: false
    }
  }
  if (action.type === actions.LOGIN_FAIL) {
      console.log('Login fail')
    return {...state,
      fail: true
    }
  }
  if (action.type === actions.RESET_FAIL) {
      console.log('Reset fail')
    return {...state,
      fail: false
    }
  }
  if (action.type === actions.LOGIN_ERROR) {
      console.log('Login error: ', action.error)
    return {...state,
      error: action.error
    }
  }

  return state;
}

export default userReducer;
