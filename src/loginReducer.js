const initialState = {
  loggedIn: false,
  users: [],
};

export default function LoginReducer(state = initialState, action) {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        loggedIn: true,
        // keycloak:keycloak,
      };
    case "LOGOUT":
      return {};

    default:
      return state;
  }
}
