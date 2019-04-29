export const register = newUser => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    const { email, password, username, interest } = newUser;

    firebase
      .createUser(
        { email, password },
        { username, email, interest, stars: [], join: [], credit: 100 }
      )
      .catch(err => console.log(err));
  };
};

export const login = user => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase.login(user).then(() => dispatch({ type: "LOGIN_SUCCESS" }));
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
      .catch(err => console.log(err));
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
      .catch(err => console.log(err));
  };
};

export const addStarEvent = eventID => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    const stars = getState().firebase.profile.stars
      ? getState().firebase.profile.stars
      : [];

    stars.includes(eventID)
      ? console.log("Already star this event")
      : firebase
          .updateProfile({ stars: [...stars, eventID] })
          .then(() => console.log("Add stars"))
          .catch(err => console.log(err));
  };
};

export const removeStarEent = eventID => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    const stars = getState().firebase.profile.stars;

    firebase
      .updateProfile({ stars: stars.filter(f => f !== eventID) })
      .catch(err => console.log(err));
  };
};
