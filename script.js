 function login() {
     var user_name = document.getElementById("loginInput").value;
     localStorage.setItem("name", user_name);
     window.location = "iLearn_rooms.html";
 }