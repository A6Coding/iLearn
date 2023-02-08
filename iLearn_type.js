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

user_name = localStorage.getItem("name");
room_name = localStorage.getItem("room_name");

function post() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name: user_name,
        message: msg
    });

    document.getElementById("msg").innerHTML = "";
}

function getData() {
    firebase.database().ref("/" + room_name).on('value', function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            childData = childSnapshot.val();
            if (childKey != "purpose") {
                firebase_message_id = childKey;
                message_data = childData;
                console.log(firebase_message_id);
                console.log(message_data);
                name = message_data['name'];
                message = message_data['message'];
                name_with_tag = "<h4> " + name + "<img class='user_tick' src='tick.png'>";
                message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
                row = name_with_tag + message_with_tag;
                document.getElementById("output").innerHTML += row + "<hr>";

            }
        });
    });
}
getData();

function back() {
    window.location = "iLearn_rooms.html";
}