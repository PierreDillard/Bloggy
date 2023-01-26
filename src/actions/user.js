export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const REGISTER = "REGISTER";

export const actionlogin = (email, token) => {
    return {
      type: LOGIN,
      payload: {
        email,
        token
      }
    }
}

export const actionregister = (pseudo, email) => {
  return {
      type: REGISTER,
      payload: {
          pseudo,
          email,
         
      }
  }
}

export const actionlogout = () => {
    return {
      type: LOGOUT
    }
}
