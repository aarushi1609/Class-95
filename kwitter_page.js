//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyC_Pvc6xvi8TJyYBCQm8efX_BTn3MK4DEM",
      authDomain: "kwitter-website-8f940.firebaseapp.com",
      databaseURL: "https://kwitter-website-8f940-default-rtdb.firebaseio.com",
      projectId: "kwitter-website-8f940",
      storageBucket: "kwitter-website-8f940.appspot.com",
      messagingSenderId: "492453506586",
      appId: "1:492453506586:web:0f70090ad9c79f487f2ba3",
      measurementId: "G-Z72CM27GD7"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

room_name = localStorage.getItem("Roomname");
username = localStorage.getItem("Username");

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: username,
            message: msg,
            like: 0
      })
}

function logout()
{
      localStorage.removeItem("Roomname");
      localStorage.removeItem("Username");
      window.location = "index.html";
}




function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
