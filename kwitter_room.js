
//ADD YOUR FIREBASE LINKS HERE
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

username = localStorage.getItem("Username");
document.getElementById("welcome-message").innerHTML = "Welcome " + username + "!";


function addRoom()
{
      roomname = document.getElementById("room_name").value;
      firebase.database().ref("/").child(roomname).update({
            purpose : "adding room name"
      });
      localStorage.setItem("Roomname", roomname);
      window.location = "kwitter_page.html"
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                          console.log("room name - ", Room_names);
                  row = "<div class='room_name' id='" + Room_names + "' onclick=redirectToRooms(this.id);'>" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
                  //End code
            });
      });
}
getData();

function redirectToRooms(name)
{
      console.log("done");
      localStorage.setItem("Roomname", name);
      window.location = "kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("Roomname");
      localStorage.removeItem("Username");
      window.location = "index.html";
}
