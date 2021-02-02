import { userConstants } from "../_constants";
const initialState = {
  isLoggedIn: false,
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        ...state,
        ...action.payload, // this is what we expect to get back from API call and login page input
        isLoggedIn: true, // we set this as true on login
      };
    default:
      return state;
  }
};
