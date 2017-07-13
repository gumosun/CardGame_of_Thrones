// To load and start the game


$('#startButton').click(function() {
  $(this).remove();
  $('#mainTitle').text('Please Select Your Family');
  $('#mainTitle').css({'color': "white",
                       'font-family': "'Bungee', cursive",
                       'font-size': "72px",
                       'animation': "fadeInDown 1s linear"});
  $('<div class="familyDiv" id="houseStark">').appendTo('.mainDiv');
  $('<div class="familyDiv" id="houseLanister">').appendTo('.mainDiv');
  $('.familyDiv').css('animation', "fadeIn 3s linear");
  playerChoice();

});


function playerChoice() {
var player = 0;
$('#houseStark').click(function() {
  $('.familyDiv').remove();
  $('#mainTitle').remove();
  $('body').css('background-image', "url(./images/map.jpg)");
  player = 1;
  return player;
});
$('#houseLanister').click(function() {
  $('.familyDiv').remove();
  $('#mainTitle').remove();
  $('body').css('background-image', "url(./images/map.jpg)");
  player = 2;
  return player;
});
  console.log(player);
}


//
//

// $("#removebtn1234").click(function(){
//     $(this).remove();
// });
