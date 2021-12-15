   const firebaseConfig = {
    apiKey: "AIzaSyCsry9ykAkbIEOcYnkkv5hhJaFhSVjEDRA",
    authDomain: "practice-4208f.firebaseapp.com",
    databaseURL: "https://practice-4208f-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "practice-4208f",
    storageBucket: "practice-4208f.appspot.com",
    messagingSenderId: "956698484021",
    appId: "1:956698484021:web:b4626b9d95319ef22ac07c"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTMl="Welcome " + user_name + " !";
function addRoom() {
      room_name = document.getElementById("room_name").value;
       firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name" 
      });
       localStorage.setItem("room_name", room_name); 
       window.location = "kwiter_page.html";
      }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="kwiter_page.html";
}
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}