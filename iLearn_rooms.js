const firebaseConfig = {
    apiKey: "AIzaSyCWRI85beuXMuL8-Cqi8YB613lhXNGbJKs",
    authDomain: "ilearn-24db1.firebaseapp.com",
    databaseURL: "https://ilearn-24db1-default-rtdb.firebaseio.com",
    projectId: "ilearn-24db1",
    storageBucket: "ilearn-24db1.appspot.com",
    messagingSenderId: "1064651499710",
    appId: "1:1064651499710:web:2efd4c965501e0f9b516ef"
};

firebase.initializeApp(firebaseConfig);

var user_name = localStorage.getItem("name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addTopic() {
    document.getElementById("room_name").innerHTML = "";
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
        purpose: "adding a room"
    });
    localStorage.setItem("room_name", room_name);
    window.location = "iLearn_type.html";
}

function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            console.log("Room Name - " + Room_names);
            row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
            document.getElementById("output").innerHTML += row;
        });
    });
}
getData();

function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "iLearn_type.html";
}

function logout() {
    localStorage.removeItem("name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}