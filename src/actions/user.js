export const LOGIN = (email, token) => {
    return {
      type: LOGIN,
      payload: {
        email,
        token
      }
    }
  }
  
  export const LOGOUT = () => {
    return {
      type: LOGOUT
    }
  }