const firebaseConfig = {
    apiKey: "AIzaSyADMhYj1M1BuBWMmUWMmlZFu6YR4_20NZ0",
    authDomain: "webapp-f1a7c.firebaseapp.com",
    databaseURL: "https://webapp-f1a7c-default-rtdb.firebaseio.com",
    projectId: "webapp-f1a7c",
    storageBucket: "webapp-f1a7c.appspot.com",
    messagingSenderId: "979840205546",
    appId: "1:979840205546:web:92e3e32c0b9251fa5f4d93",
    measurementId: "G-E5G58GW7WZ"
  };

  user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome "+user_name+" !"


