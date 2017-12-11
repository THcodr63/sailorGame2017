$(document).ready(function(){

var totalScore = 0;
var wins = 0;
var losses = 0;
var rando = Math.floor(Math.random() * 101 + 19);

  var scout1 = Math.floor(Math.random() * 10 + 1);
  console.log(scout1);
  var scout2 = Math.floor(Math.random() * 10 + 1);
  console.log(scout2);
  var scout3 = Math.floor(Math.random() * 10 + 1);
  console.log(scout3);
  var scout4 = Math.floor(Math.random() * 10 + 1);
  console.log(scout4);
  var scout5 = Math.floor(Math.random() * 10 + 1);
  console.log(scout5);


$("#enemyNum").text(rando);
$("#winNum").text(wins);
$("#lossesNum").text(losses);

function reset() {
  rando = Math.floor(Math.random() * 101 + 19);
  console.log(rando);
  $("#enemyNum").text(rando);
  var scout1 = Math.floor(Math.random() * 10 + 1);
  var scout2 = Math.floor(Math.random() * 10 + 1);
  var scout3 = Math.floor(Math.random() * 10 + 1);
  var scout4 = Math.floor(Math.random() * 10 + 1);
  var scout5 = Math.floor(Math.random() * 10 + 1);
  totalScore = 0;
  $("#finalScore").text(totalScore);
}

//  Music Buttons
var usAudio = document.createElement("audio");
usAudio.setAttribute("src", "music/smUsTheme.mp3");
usAudio.addEventListener("end", function() {
  this.play();
}, false);

$("#us-button").click(function() {
  usAudio.play();
  $("#status").text("Status: Playing");
});

$("#pause-button").click(function() {
  usAudio.pause();
  $("#status").text("Status: Paused");
});

var orgAudio = document.createElement("audio");
orgAudio.setAttribute("src", "music/moonlightDensetsu.mp3");
orgAudio.addEventListener("end", function() {
  this.play();
}, false);

$("#org-button").click(function() {
  orgAudio.play();
  $("#status").text("Status: Playing");
});

$("#pause-button").click(function() {
  orgAudio.pause();
  $("#status").text("Status: Paused");
});


  // Scout Button Fuctions
  $("#merc").on("click", function(){
    totalScore = totalScore + scout1;
    console.log("New totalScore= " + totalScore);
  $("#finalScore").text(totalScore); 
      if (totalScore == rando){
        winner(); 
      }

      else if (totalScore > rando){
        loser(); 
      }   
})  

$('#mars').on('click', function(){
    totalScore = totalScore + scout2;
    console.log("New totalScore= " + totalScore);
  $('#finalScore').text(totalScore);
      if (totalScore === rando){
        winner();
      }

      else if (totalScore > rando){
        loser();
      } 
}) 

$('#moon').on('click', function(){
    totalScore = totalScore + scout3;
    console.log("New totalScore= " + totalScore);
$('#finalScore').text(totalScore);
        if (totalScore === rando){
        winner();
      }

      else if (totalScore > rando){
        loser();
      } 
})  

$('#jup').on('click', function(){
    totalScore = totalScore + scout4;
    console.log("New totalScore= " + totalScore);
$('#finalScore').text(totalScore);
        if (totalScore === rando){
        winner();
      }

      else if (totalScore > rando){
        loser();
      } 
})  

$('#venus').on('click', function(){
    totalScore = totalScore + scout5;
    console.log("New totalScore= " + totalScore);
$('#finalScore').text(totalScore); 
        if (totalScore === rando){
        winner();
      }

      else if (totalScore > rando){
        loser();
      }
});

//Win Lose Reset Functions 
function winner(){
  alert("You won and triumphed over evil!!")
  wins++; 
  $('#winNum').text(wins);
  reset();
}

function loser(){
  alert("You lost... but a sailor scout never quits!!")
  losses++;
  $('#lossesNum').text(losses);
  reset();
 }
 
}); 





