export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

export const actionlogin = (email, token) => {
    return {
      type: LOGIN,
      payload: {
        email,
        token
      }
    }
}

export const actionlogout = () => {
    return {
      type: LOGOUT
    }
}
