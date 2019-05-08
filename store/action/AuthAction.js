export const register = newUser => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    const { email, password, username, interest } = newUser;

    firebase
      .createUser(
        { email, password },
        { username, email, interest, stars: [], join: [], credit: 100 }
      )
      .then(() => dispatch({ type: "CREATE_ACCOUNT_SUCCESS" }))
      .catch(err =>
        dispatch({ type: "CREATE_ACCOUNT_FAIL", payload: err.toString() })
      );
  };
};

export const login = user => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase
      .login(user)
      .then(() => dispatch({ type: "LOGIN_SUCCESS" }))
      .catch(err => dispatch({ type: "LOGIN_FAIL", payload: err.toString() }));
  };
};

export const logout = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase.logout().then(() => {
      dispatch({ type: "SIGNOUT_SUCCESS" });
    });
  };
};

export const updateInterest = userInterest => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .updateProfile({ interest: userInterest })
      .then(() => dispatch({ type: "UPDATE_INTEREST_COMPLETE" }))
      .catch(err => dispatch({ type: "UPDATE_INTEREST_FAIL", payload: err }));
  };
};

export const addJoinEvent = eventID => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    const join = getState().firebase.profile.join
      ? getState().firebase.profile.join
      : [];

    firebase
      .updateProfile({ join: [...join, eventID] })
      .then(() => dispatch({ type: "JOIN_EVENT_COMPLETE" }))
      .catch(err => dispatch({ type: "JOIN_EVENT_FAIL", payload: err }));
  };
};

export const addStarEvent = eventID => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    const stars = getState().firebase.profile.stars
      ? getState().firebase.profile.stars
      : [];

    stars.includes(eventID)
      ? dispatch({ type: "ALREADY_STAR_EVENT" })
      : firebase
          .updateProfile({ stars: [...stars, eventID] })
          .then(() => dispatch({ type: "STAR_EVENT_COMPLETE" }))
          .catch(err => dispatch({ type: "STAR_EVENT_FAIL", payload: err }));
  };
};

export const removeStarEvent = eventID => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    const stars = getState().firebase.profile.stars;

    firebase
      .updateProfile({ stars: stars.filter(f => f !== eventID) })
      .then(() => dispatch({ type: "REMOVE_STAR_EVENT_COMPLETE" }))
      .catch(err => dispatch({ type: "REMOVE_STAR_EVENT_FAIL", payload: err }));
  };
};
