const initialState = {
    isLoggedIn: false,
    email: '',
    token: ''
  }
  
  const LOGIN = 'LOGIN'
  const LOGOUT = 'LOGOUT'
  
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