const INITIAL_STATE = { eventError: "" };
export const eventReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "CREATE_NEW_EVENT":
      console.log("Create Success");
      return state;
    case "CREATE_EVENT_FAIL":
      newState = { ...state, eventError: action.payload };
      return newState;
    case "ADD_PARTICIPANT_COMPLETE":
      console.log("add participant complete");
      return state;
    case "ADD_PARTICIPANT_FAIL":
      newState = { ...state, eventError: action.payload };
      return newState;
    default:
      return state;
  }
};
