import { setEmail, setLogout } from "./userSlice";

export const setEmailWithStorage = (email) => {
  return async (dispatch, getState) => {
    dispatch(setEmail({ email }));
    localStorage.setItem("email", email);
  };
};

export const removeEmailWithStorage = () => {
  return async (dispatch, getState) => {
    dispatch(setLogout());
    localStorage.removeItem("email");
  };
};
