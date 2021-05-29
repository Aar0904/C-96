var firebaseConfig = {
      apiKey: "AIzaSyBJ6YKJwYjK5SgWyzOxJMCf1xGoj3oQvNk",
      authDomain: "kwitter-40f3e.firebaseapp.com",
      databaseURL: "https://kwitter-40f3e-default-rtdb.firebaseio.com",
      projectId: "kwitter-40f3e",
      storageBucket: "kwitter-40f3e.appspot.com",
      messagingSenderId: "947408112675",
      appId: "1:947408112675:web:ff5a8a976926f5c114f596"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  childData = childSnapshot.val();
                  if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code

                        //End code
                  }
            });
      });
}
getData();

function logOut() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location("index.html");
}

function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            msg: msg,
            like: 0
      });

      document.getElementById("msg").value = "";
}