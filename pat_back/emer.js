  var config = {
    apiKey: "AIzaSyCrAFKC95xCF2GvHBZoBV7fwYzzHts4NEA",
    authDomain: "meditrack-6a333.firebaseapp.com",
    databaseURL: "https://meditrack-6a333.firebaseio.com",
    projectId: "meditrack-6a333",
    storageBucket: "meditrack-6a333.appspot.com",
    messagingSenderId: "147072280269"
  };
  firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
 if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }

var x = document.getElementById('demo');

function showPosition(position) {
	lat = position.coords.latitude;
	long = position.coords.longitude;
	var m = user.email;
	m = m.replace("@prototype.in", "");

   // x.innerHTML = "Latitude: " + lat + 
   // "<br>Longitude: " + long; 
  	var loc = "Lat:-" + lat + "Long:-" + long;
    var ref = firebase.database().ref().child("Users").child(m).child("Location").push(loc);
   //Upload to Firebase
};
}
});



//var x = document.getElementById("demo");

