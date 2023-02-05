

export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const REGISTER = "REGISTER";

export const actionlogin = (email,token,role) => {
 
    return dispatch => {
      dispatch({
        type: LOGIN,
        payload: {
          email,
          role,
         /*  pseudo, */
          token
        
      
        }
      });
   localStorage.setItem("email", email);
      localStorage.setItem("role",role); 
     localStorage.setItem("token",token );  
    }
};

export const actionregister = (pseudo, email,token) => {
  return {
      type: REGISTER,
      payload: {
          pseudo,
          email,
          token,
        
      }
  }
};

export const actionlogout = () => {
    return dispatch => {
      dispatch({
        type: LOGOUT
      });
    localStorage.removeItem("email");
 /*      localStorage.removeItem("token");  */
    /*   localStorage.removeItem("pseudo");  */
    };
};