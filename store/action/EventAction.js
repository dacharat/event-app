export const createEvent = event => {
  return (dispatch, getState, { getFirebase }) => {
    // const profile = getState().firebase.profile
    const firebase = getFirebase();
    // console.log(firebase.database());

    firebase.push("events", event).then(() => {
      console.log("Success");
    });
  };
};
