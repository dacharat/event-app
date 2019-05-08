// const INITIAL_STATE = {
//   username: "Jack",
//   password: "123456",
//   interest: ["Sports", "Entertainment"],
//   stars: ["Event1"],
//   join: [],
//   credit: 100
// };

const INITIAL_STATE = {
  authError: ""
};

export const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "CREATE_ACCOUNT_SUCCESS":
      console.log("create account success");
      return state;
    case "CREATE_ACCOUNT_FAIL":
      newState = { ...state, authError: action.payload };
      return newState;
    case "SIGNOUT_SUCCESS":
      console.log("logout success");
      return state;
    case "LOGIN_SUCCESS":
      console.log("login success");
      return state;
    case "LOGIN_FAIL":
      newState = { ...state, authError: action.payload };
      return newState;
    case "UPDATE_INTEREST_COMPLETE":
      console.log("UPDATE_INTEREST_COMPLETE");
      return state;
    case "UPDATE_INTEREST_FAIL":
      newState = { ...state, authError: action.payload };
      return newState;
    case "JOIN_EVENT_COMPLETE":
      console.log("JOIN_EVENT_COMPLETE");
      return state;
    case "JOIN_EVENT_FAIL":
      newState = { ...state, authError: action.payload };
      return newState;
    case "STAR_EVENT_COMPLETE":
      console.log("STAR_EVENT_COMPLETE");
      return state;
    case "ALREADY_STAR_EVENT":
      console.log("ALREADY_STAR_EVENT");
      return state;
    case "STAR_EVENT_FAIL":
      newState = { ...state, authError: action.payload };
      return newState;
    case "REMOVE_STAR_EVENT_COMPLETE":
      console.log("REMOVE_STAR_EVENT_COMPLETE");
      return state;
    case "REMOVE_STAR_EVENT_FAIL":
      newState = { ...state, authError: action.payload };
      return newState;
    default:
      return state;
  }
};
