

export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const REGISTER = "REGISTER";

export const actionlogin = (email, token) => {
 
    return dispatch => {
      dispatch({
        type: LOGIN,
        payload: {
          email,
          token,
      
        }
      });
   localStorage.setItem("email", email);
      localStorage.setItem("token", token); 
    };
};

export const actionregister = (pseudo, email) => {
  return {
      type: REGISTER,
      payload: {
          pseudo,
          email,
      }
  }
};

export const actionlogout = () => {
    return dispatch => {
      dispatch({
        type: LOGOUT
      });
    localStorage.removeItem("email");
      localStorage.removeItem("token"); 
    };
};