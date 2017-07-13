// Create the cards
function card(family, name, power, def) {
  this.family = family;
  this.name = name;
  this.power = power;
  this.def = def;
}

var jonSnow = new card("stark", "Jon Snow", 80, 75);
var aryaStark = new card("stark", "Arya Stark", 85, 40);
var sansaStark = new card("stark", "Sansa Stark", 50, 40);
var cerseiLannister = new card("lannister", "Cersei Lannister", 40, 70);
var jaimeLannister = new card("lannister", "Jaime Lannister", 75, 85);
var tyrionLannister = new card("lannister", "Tyrion Lannister", 50, 50);

var player = 0;

// To load and start the game
$('#startButton').click(function() {
  $(this).remove();
  $('#mainTitle').text('Please Select Your Family');
  $('#mainTitle').css({'color': "white",
                       'font-family': "'Bungee', cursive",
                       'font-size': "72px",
                       'animation': "fadeInDown 1s linear"});
  $('<div class="familyDiv" id="houseStark">').appendTo('.mainDiv');
  $('<div class="familyDiv" id="houseLannister">').appendTo('.mainDiv');
  $('.familyDiv').css('animation', "fadeIn 3s linear");
  playerChoice();
});


function playerChoice() {
$('#houseStark').click(function() {
  $('.familyDiv').remove();
  $('#mainTitle').remove();
  $('.mainDiv').remove();
  $('body').css({'background-image': "url(./images/map.jpg)", 'background-size': "cover"});
  player = 1;
  deployCards(player);
});
$('#houseLannister').click(function() {
  $('.familyDiv').remove();
  $('#mainTitle').remove();
  $('.mainDiv').remove();
  $('body').css('background-image', "url(./images/map.jpg)");
  player = 2;
  deployCards(player);
});

}

function deployCards(player){
  $('<div id="row1">').appendTo('container');
  $('<div id="row2">').appendTo('container');
    for (let i=0 ; i<3; i++) {
    $(`<div id="${i}">`).appendTo('#row1');
    }
    for (let i=0 ; i<3; i++) {
    $(`<div id="${i}">`).appendTo('#row2');
    }
   if (player == 1) {
      $('#row2').addClass('houseStark');
      $('#row1').addClass('houseLannister');
   } else {
      $('#row1').addClass('houseStark');
      $('#row2').addClass('houseLannister');
   }

  // if (player == 1){

  // } else {

  // }
}


//
//

// $("#removebtn1234").click(function(){
//     $(this).remove();
// });
