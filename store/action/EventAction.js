export const createEvent = event => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase.push("events", event).then(() => {
      dispatch({ type: "CREATE_NEW_EVENT", event });
    });
  };
};
