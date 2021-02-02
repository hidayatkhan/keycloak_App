import { combineReducers } from "redux";

import { loginReducer } from "./authentication.reducer";
import { registration } from "./registration.reducer";

const rootReducer = combineReducers({
  userAuthState: loginReducer,
  userRegState: registration,
});

export default rootReducer;
