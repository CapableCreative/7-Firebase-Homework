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

// LINES 17 - 21 POPULATE THE DAY OF THE WEEK INTO THE APP HEADER
var today = new Date();
var headerDate = today.getDay();
var currentHour = today.getHours();
var currentMinute = today.getMinutes(00);
var currentTime = currentHour + ":" + currentMinute;
var dayOfWeek = ["Sunday ","Monday ","Tuesday ","Wednesday ","Thursday ","Friday ","Saturday "];
displayDay = dayOfWeek[headerDate];
$(".headDate").text(displayDay);
$("#currTime").text(currentTime);
let i = 0;
// THIS JQUERY WILL PUSH INPUT VALUES INTO THE TRAIN SCHEDULE
$("#trainSubmit").on("click", function(){
    // Destination data population
    let destination = $("#destInput").val();
    if (destination == ""){
        $(".destWrap").append("<p class=\'destEntry"+i+"\'>");
        $(".destEntry"+i+"").text("Unnamed City of Doom");
    }
    else {
        $(".destWrap").append("<p class=\'destEntry"+i+"\'>");
        $(".destEntry"+i+"").text(destination);
    }
    // Last Departure data population
    let lastDeparture = $("#lastInput").val();
    if (lastDeparture == ""){
        $(".lastWrap").append("<p class=\'lastEntry"+i+"\'>");
        $(".lastEntry"+i+"").text("The Day of Your Birth");
    }
    else{
        $(".lastWrap").append("<p class=\'lastEntry"+i+"\'>");
        $(".lastEntry"+i+"").text(lastDeparture);
    }
    // Departure Freqency population
    let frequency = $("#freqInput").val();
    if (frequency == ""){
        $(".freqWrap").append("<p class=\'freqEntry"+i+"\'>");
        $(".freqEntry"+i+"").text("As One Life Ends");
    }
    else{
        $(".freqWrap").append("<p class=\'freqEntry"+i+"\'>");
        $(".freqEntry"+i+"").text(frequency);
    }
    // Next Departure population
    // ((current time - original time in minutes) % frequency ) - frequency * -1 --> Time til next train - SLF


    i++;
});

console.log(currentTime);

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











// THIS IS THE OLDER FIREBASE CODE FOR THE CLICKER APP. MODIFY / UPDATE THIS WITH METODOLOGY FOR THE TRAIN APP - SLF 9/10/19
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
