export const createEvent = event => {
  return async (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    const uri = event.img;

    // create file name
    let filename =
      event.title.replace(/\s/g, "") +
      "-(" +
      event.date.replace(/\s/g, "") +
      ")-(" +
      event.time +
      ")";

    // change image uri to blob
    const blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function() {
        resolve(xhr.response);
      };
      xhr.onerror = function(e) {
        console.log(e);
        reject(new TypeError("Network request failed"));
      };
      xhr.responseType = "blob";
      xhr.open("GET", uri, true);
      xhr.send(null);
    });

    // get firebase storage refference
    const storageRef = firebase.storage().ref();
    const imageRef = storageRef.child("images/" + filename);

    // upload image to firebase
    const uploadTask = imageRef.put(blob);
    uploadTask.on(
      "state_changed",
      snap => {},
      err => {
        console.log(err);
      },
      async () => {
        const downloadURL = await uploadTask.snapshot.ref.getDownloadURL();

        firebase.push("events", { ...event, img: downloadURL }).then(() => {
          console.log("create event complete");
        });
      }
    );
  };
};

export const addParticipant = (eventID, userID = "") => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    const participant = getState().firebase.data.events[eventID].participant || [];

    firebase
      .ref("events/" + eventID)
      .update({ participant: [...participant ,userID] })
      .then(() => console.log("update complete"))
      .catch(err => console.log(err));
  };
};
