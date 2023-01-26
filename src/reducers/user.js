import { LOGIN , LOGOUT } from '../actions/user';

const initialState = {
    isLoggedIn: false,
    email: '',
    token: ''
  }
  

  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN:
        return {
          ...state,
          isLoggedIn: true,
          email: action.payload.email,
          token: action.payload.token
        }
      case LOGOUT:
        return {
          ...state,
          isLoggedIn: false,
          email: '',
          token: ''
        }
      default:
        return state
    }
  }
  
  export default reducer