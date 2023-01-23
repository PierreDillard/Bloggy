export const login = (email, token) => {
    return {
      type: LOGIN,
      payload: {
        email,
        token
      }
    }
  }
  
  export const logout = () => {
    return {
      type: LOGOUT
    }
  }