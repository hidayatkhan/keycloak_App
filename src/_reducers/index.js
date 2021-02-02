import { combineReducers } from "redux";

import { loginReducer } from "./authentication.reducer";
import { registration } from "./registration.reducer";

const rootReducer = combineReducers({
  userAuthState: loginReducer,
  userRegState: registration,
  // CartState: CartState,
});

export default rootReducer;
