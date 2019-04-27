const INITIAL_STATE = {
  username: "Jack",
  password: "123456",
  interest: ["Sports", "Entertainment"],
  stars: ["Event1"],
  join: [],
  credit: 100
};

export const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_STARS_EVENT":
      if (state.stars.includes(action.payload)) return state;
      newState = { ...state, stars: [...state.stars, action.payload] };
      return newState;
    case "REMOVE_STARS_EVENT":
      newState = {
        ...state,
        stars: state.stars.filter(star => star !== action.payload)
      };
      return newState;
    case "JOIN_EVENT":
      newState = { ...state, join: [...state.join, action.payload] };
      return newState;
    case "UPDATE_PROFILE":
      newState = { ...state, interest: action.payload };
      return newState;
    case "CREATE_ACCOUNT_SUCCESS":
      console.log("create account success");
      return state;
    case "SIGNOUT_SUCCESS":
      console.log("logout success");
      return state;
    case "LOGIN_SUCCESS":
      console.log("login success");
      return state;
    default:
      return state;
  }
};
