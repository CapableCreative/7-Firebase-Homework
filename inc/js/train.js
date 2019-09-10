var firebaseConfig = {
    apiKey: "AIzaSyCv7rL1jYhVy0FyRMhfAmMCpAFe_yyDJuY",
    authDomain: "clicktest-713a3.firebaseapp.com",
    databaseURL: "https://clicktest-713a3.firebaseio.com",
    projectId: "clicktest-713a3",
    storageBucket: "",
    messagingSenderId: "607363319196",
    appId: "1:607363319196:web:358df4332ff8800e54f459"
};
  // Initialize Firebase

firebase.initializeApp(firebaseConfig);

var count = 100;

firebase.database().ref().on("value",function(snapshot){
    count = snapshot.val().clicks;
    $("#clickValue").html(count);
})

$("#clickButton").on("click",function(){
    count--;
    firebase.database().ref().set({
        clicks:count
    });
})

$("#restartButton").on("click",function(){
    firebase.database().ref().set({
        clicks:100
    })
})
