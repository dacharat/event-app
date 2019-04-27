INITIAL_STATE = { createToast: false };
export const eventReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "CREATE_NEW_EVENT":
      state = { createToast: false };
      console.log("Create Success");
      return state;
    default:
      return state;
  }
};
