// Create the cards
function card(family, name, power, def) {
  this.family = family;
  this.name = name;
  this.power = power;
  this.def = def;
}

var jonSnow = new card("stark", "JonSnow", 80, 75);
var aryaStark = new card("stark", "AryaStark", 85, 40);
var sansaStark = new card("stark", "SansaStark", 50, 40);
var cerseiLannister = new card("lannister", "CerseiLannister", 40, 70);
var jaimeLannister = new card("lannister", "JaimeLannister", 75, 85);
var tyrionLannister = new card("lannister", "TyrionLannister", 50, 50);

var starkFamily =[jonSnow, aryaStark, sansaStark];
var lannisterFamily =[cerseiLannister, jaimeLannister, tyrionLannister];
var player = 0;
var playerCardPower = 0;
var playerCardDef = 0;
var cpuCardPower = 0;
var cpuCardDef = 0;

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
  $('body').css({'background-image': "url(./images/map.jpg)", 'background-size': "cover", 'height': "100%"});
  player = 1;
  deployCards(player);
});
$('#houseLannister').click(function() {
  $('.familyDiv').remove();
  $('#mainTitle').remove();
  $('.mainDiv').remove();
  $('body').css({'background-image': "url(./images/map.jpg)", 'background-size': "cover", 'height': "100%"});
  player = 2;
  deployCards(player);
});

}

function deployCards(player) {
  $('<div id="row1">').appendTo('container');
  $('<div id="row2">').appendTo('container');
   if (player == 1) {
      $('#row2').addClass('houseStark');
      $('#row1').addClass('houseLannister');
       for (let i=0 ; i<3; i++) {
        $(`<div id="${starkFamily[i].name}" class=${i}>`).appendTo('#row2');
      }
       for (let i=0 ; i<3; i++) {
        $(`<div id="${lannisterFamily[i].name}" class=${i}>`).appendTo('#row1');
    }
   } else {
      $('#row1').addClass('houseStark');
      $('#row2').addClass('houseLannister');
      for (let i=0 ; i<3; i++) {
        $(`<div id="${starkFamily[i].name}" class=${i}>`).appendTo('#row1');
      }
       for (let i=0 ; i<3; i++) {
        $(`<div id="${lannisterFamily[i].name}" class=${i}>`).appendTo('#row2');
    }
   }
      selectCard(player);
   }

function selectCard(player) {
  if (player == 1){
  $(`.0`).click(function() {
    playerCardPower = starkFamily[0].power;
    playerCardDef = starkFamily[0].def;
    cpuLannisterRandom()
  })
  $(`.1`).click(function() {
    playerCardPower = starkFamily[1].power;
    playerCardDef = starkFamily[1].def;
    cpuLannisterRandom()
  })
  $(`.2`).click(function() {
     playerCardPower = starkFamily[2].power;
     playerCardDef = starkFamily[2].def;
     cpuLannisterRandom()
  })
 } else {
  $(`.0`).click(function() {
     playerCardPower = lannisterFamily[0].power;
     playerCardDef = lannisterFamily[0].def;
     cpuStarkRandom()
  })
   $(`.1`).click(function() {
     playerCardPower = lannisterFamily[1].power;
     playerCardDef = lannisterFamily[1].def;
     cpuStarkRandom()
  })
    $(`.2`).click(function() {
     playerCardPower = lannisterFamily[2].power;
     playerCardDef = lannisterFamily[2].def;
     cpuStarkRandom()
  })
}
}

function cpuLannisterRandom(){
  var arr = [1, 2, 3];
  var rand = Math.random();
  rand *= arr.length;
  rand = Math.floor(rand);
  cpuCardPower = lannisterFamily[rand].power;
  cpuCardDef = lannisterFamily[rand].def;
}

function cpuStarkRandom(){
  var arr = [1, 2, 3];
  var rand = Math.random();
  rand *= arr.length;
  rand = Math.floor(rand);
  cpuCardPower = starkFamily[rand].power;
  cpuCardDef = starkFamily[rand].def;
}

