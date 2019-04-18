const INITIAL_STATE = {
  username: "Jack",
  password: "123456",
  interest: ["Sports", "Entertainment"],
  stars: [],
  join: [],
  credit: 100
};

export const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_STARS_EVENT":
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
    default:
      return state;
  }
};
