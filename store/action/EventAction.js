export const createEvent = event => {
  return async (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    const uri = event.img.uri;
    const splitURI = uri.split("/");
    let filename = splitURI[splitURI.length - 1];
    console.log(filename);
    var metadata = {
      contentType: "image/png"
    };
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

    const storageRef = firebase.storage().ref();
    const imageRef = storageRef.child("images/" + filename);

    const uploadTask = imageRef.put(blob, metadata);
    uploadTask.on(
      "state_changed",
      snap => {},
      err => {
        console.log(err);
      },
      async () => {
        const downloadURL = await uploadTask.snapshot.ref.getDownloadURL();
        console.log("Download URL: ", downloadURL);

        firebase.push("events", { ...event, img: downloadURL }).then(() => {
          console.log("create event complete");
        });
      }
    );
    // imageRef
    //   .putString(base64, "data_url")
    //   .then(snap => console.log("snap complete"))
    //   .catch(err => console.log(err));

    // firebase.push("events", event).then(() => {
    //   dispatch({ type: "CREATE_NEW_EVENT", event });
    // });
  };
};
