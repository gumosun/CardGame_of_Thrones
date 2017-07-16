// Create the cards
function card(family, name, power, def, dead) {
  this.family = family;
  this.name = name;
  this.power = power;
  this.def = def;
  this.dead = dead
}

var jonSnow = new card("stark", "JonSnow", 80, 75, false);
var aryaStark = new card("stark", "AryaStark", 85, 40, false);
var sansaStark = new card("stark", "SansaStark", 50, 40, false);
var cerseiLannister = new card("lannister", "CerseiLannister", 40, 70, false);
var jaimeLannister = new card("lannister", "JaimeLannister", 75, 85, false);
var tyrionLannister = new card("lannister", "TyrionLannister", 50, 50, false);
var starkFamily =[jonSnow, aryaStark, sansaStark];
var lannisterFamily =[cerseiLannister, jaimeLannister, tyrionLannister];

// Declare global variables
var player = 0;
var playerCardPower = 0;
var playerCardDef = 0;
var cpuCardPower = 0;
var cpuCardDef = 0;
var cpuCard;
var playerCard;
var rand = 0;
var cpuDeletedCard1;
var cpuDeletedCard2;
var cpuDeletedCard3;


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

// Tap family to load the game screen and to know which side of cards need to be deployed
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
        $(`<div id="${starkFamily[i].name}" class=${i} data-power=${starkFamily[i].power} data-def=${starkFamily[i].def} data-dead=${starkFamily[i].dead}>`).appendTo('#row2');
      }
       for (let i=0 ; i<3; i++) {
        $(`<div id="${lannisterFamily[i].name}" class=${i} data-power=${lannisterFamily[i].power} data-def=${lannisterFamily[i].def} data-dead=${lannisterFamily[i].dead}>`).appendTo('#row1');
    }
   } else {
      $('#row1').addClass('houseStark');
      $('#row2').addClass('houseLannister');
      for (let i=0 ; i<3; i++) {
        $(`<div id="${starkFamily[i].name}" class=${i} data-power=${starkFamily[i].power} data-def=${starkFamily[i].def} data-dead=${starkFamily[i].dead}>`).appendTo('#row1');
      }
       for (let i=0 ; i<3; i++) {
        $(`<div id="${lannisterFamily[i].name}" class=${i} data-power=${lannisterFamily[i].power} data-def=${lannisterFamily[i].def} data-dead=${lannisterFamily[i].dead}>`).appendTo('#row2');
    }
   }
      selectCard(player);
   }

function selectCard(player) {
  if (player == 1){
  $(`.0`).click(function() {
    $('#row1 div').css('border', "0");
    playerCardPower = starkFamily[0].power;
    playerCardDef = starkFamily[0].def;
    playerCard = $('#row2 div')[0];
    console.log("cpuDeletedCard1 is" + cpuDeletedCard1 + "cpuDeletedCard2 is" + cpuDeletedCard2 );
    cpuLannisterRandom(cpuDeletedCard1,cpuDeletedCard2,cpuDeletedCard3)
    cardComparing(playerCardPower, playerCardDef, cpuCardPower, cpuCardDef,
      cpuCard, playerCard,rand, cpuDeletedCard1, cpuDeletedCard2, cpuDeletedCard3 )
  })
  $(`.1`).click(function() {
    $('#row1 div').css('border', "0");
    playerCardPower = starkFamily[1].power;
    playerCardDef = starkFamily[1].def;
    playerCard = $('#row2 div')[1];
    console.log(playerCardPower);
    console.log(playerCardDef);
    cpuLannisterRandom(cpuDeletedCard1,cpuDeletedCard2,cpuDeletedCard3)
    cardComparing(playerCardPower, playerCardDef, cpuCardPower, cpuCardDef, cpuCard,
      playerCard, rand, cpuDeletedCard1, cpuDeletedCard2, cpuDeletedCard3)
  })
  $(`.2`).click(function() {
    $('#row1 div').css('border', "0");
     playerCardPower = starkFamily[2].power;
     playerCardDef = starkFamily[2].def;
     playerCard = $('#row2 div')[2];
     console.log(playerCardPower);
     console.log(playerCardDef);
     cpuLannisterRandom(cpuDeletedCard1,cpuDeletedCard2,cpuDeletedCard3)
     cardComparing(playerCardPower, playerCardDef, cpuCardPower, cpuCardDef, cpuCard,
      playerCard, rand, cpuDeletedCard1, cpuDeletedCard2, cpuDeletedCard3)
  })
 } else {
  $(`.0`).click(function() {
    $('#row1 div').css('border', "0");
     playerCardPower = lannisterFamily[0].power;
     playerCardDef = lannisterFamily[0].def;
     playerCard = $('#row2 div')[0];
     console.log(playerCardPower);
     console.log(playerCardDef);
     cpuStarkRandom()
     cardComparing(playerCardPower, playerCardDef, cpuCardPower, cpuCardDef, cpuCard, playerCard, rand)
  })
   $(`.1`).click(function() {
    $('#row1 div').css('border', "0");
     playerCardPower = lannisterFamily[1].power;
     playerCardDef = lannisterFamily[1].def;
     playerCard = $('#row2 div')[1];
     console.log(playerCardPower);
     console.log(playerCardDef);
     cpuStarkRandom(cpuDeletedCard)
     cardComparing(playerCardPower, playerCardDef, cpuCardPower, cpuCardDef, cpuCard, playerCard, rand)
  })
    $(`.2`).click(function() {
    $('#row1 div').css('border', "0");
     playerCardPower = lannisterFamily[2].power;
     playerCardDef = lannisterFamily[2].def;
     playerCard = $('#row2 div')[2];
     console.log(playerCardPower);
     console.log(playerCardDef);
     cpuStarkRandom(cpuDeletedCard)
     cardComparing(playerCardPower, playerCardDef, cpuCardPower, cpuCardDef, cpuCard, playerCard, rand)
  })
}
}

function cpuLannisterRandom(){
  var arr = [1, 2, 3];
  rand = Math.random();
  rand *= arr.length;
  rand = Math.floor(rand);
  console.log("rand is" + rand +"and" + "cpuDeletedCard1 is" + cpuDeletedCard1 +" " + "cpuDeletedCard2 is" + " "+ cpuDeletedCard2
   + "cpuDeletedCard3 is" + cpuDeletedCard3 )
  if (rand == 0 && cpuDeletedCard1 == 1){
     console.log("run through here")
    cpuLannisterRandom(cpuDeletedCard1, cpuDeletedCard2,cpuDeletedCard3)
  } else if (rand == 1 && cpuDeletedCard2 == 1){
    console.log("run through here")
    cpuLannisterRandom(cpuDeletedCard1, cpuDeletedCard2,cpuDeletedCard3)
  } else if (rand == 2 && cpuDeletedCard3 == 1){
    console.log("run through here")
    cpuLannisterRandom(cpuDeletedCard1, cpuDeletedCard2,cpuDeletedCard3)
  }
  cpuCard = $('#row1 div')[rand];

  $(cpuCard).css('border', "10px solid red");
  cpuCardPower = lannisterFamily[rand].power;
  cpuCardDef = lannisterFamily[rand].def;
  console.log(cpuCardPower);
  console.log(cpuCardDef);
}

function cpuStarkRandom(){
  var arr = [1, 2, 3];
  rand = Math.random();
  rand *= arr.length;
  rand = Math.floor(rand);
  cpuCard = $('#row1 div')[rand];
  $(cpuCard).css('border', "10px solid red");
  cpuCardPower = starkFamily[rand].power;
  cpuCardDef = starkFamily[rand].def;
  console.log(cpuCardPower);
  console.log(cpuCardDef);
}

function cardComparing() {
  if (playerCardPower >= cpuCardDef && cpuCardPower >= playerCardDef) {
      $('<img src="./images/erase.png">').appendTo(playerCard);
      $('<img src="./images/erase.png">').appendTo(cpuCard);
      $(playerCard).css('border', "0");
      console.log("rand is" + rand);
      if (rand == 0){
        cpuDeletedCard1 = 1
        console.log("cpuDeletedCard1 is" + cpuDeletedCard1)

      } else if (rand == 1){
        cpuDeletedCard2 = 1;
        console.log("cpuDeletedCard2 is" + cpuDeletedCard2)

      }else {
        cpuDeletedCard3 = 1;
        console.log("cpuDeletedCard3 is" + cpuDeletedCard3)

      }
  } else if (playerCardPower >= cpuCardDef) {
      $('<img src="./images/erase.png">').appendTo(cpuCard);
       if (rand == 0){
        cpuDeletedCard1 = 1
        console.log("cpuDeletedCard1 is" + cpuDeletedCard1)

      } else if (rand == 1){
        cpuDeletedCard2 = 1;
        console.log("cpuDeletedCard2 is" + cpuDeletedCard2)

      }else {
        cpuDeletedCard3 = 1;
        console.log("cpuDeletedCard3 is" + cpuDeletedCard3)

      }
        console.log("rand is" + rand);
  } else if (cpuCardPower >= playerCardDef) {
      $('<img src="./images/erase.png">').appendTo(playerCard);
      $(playerCard).css('border', "0");
      console.log(playerCard);
      console.log(cpuCard);
  } else {
      alert("Draw! Select another game to combat");
  }
}

