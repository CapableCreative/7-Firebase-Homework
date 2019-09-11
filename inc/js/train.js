/*
I. -- SET UP FIREBASE, JQUERY, BOOTSTRAP, AND LOCAL JS + CSS
    1. Add Firebase Database (previous Clicktest database with new data) - TESTED AND COMPLETE - SLF
    2. Open in browser, test for errors - TESTED AND COMPLETE - SLF

II. -- CREATE FILE STRUCTURE WITH HTML
    1. Set up containers with necessary ids and classes
    2. Do initial styling of app
    3. Comment next steps throughout

III. -- BEGIN WRITING JS    
    1. Test firebase setup
    2. Test setting new data to database
*/

var today = new Date();
var headerDate = today.getDay();
var dayOfWeek = ["Sunday ","Monday ","Tuesday ","Wednesday ","Thursday ","Friday ","Saturday "];
displayDay = dayOfWeek[headerDate];
$(".headDate").text(displayDay);




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
<<<<<<< HEAD


console.log(displayDay);
=======
>>>>>>> ff05fc0a54f606482f2076e8723fc26f4482cd29
