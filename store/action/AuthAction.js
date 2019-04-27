export const register = newUser => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    const { email, password, username, interest } = newUser;

    firebase
      .createUser({ email, password }, { username, email, interest })
      .catch(err => console.log(err));
  };
};

export const updateInterest = user => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
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
