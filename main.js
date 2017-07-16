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
var sansaStark = new card("stark", "SansaStark", 50, 45, false);
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
var selection =0;
var rand = 0;
var cpuDeletedCard1;
var cpuDeletedCard2;
var cpuDeletedCard3;
var playerDeletedCard1;
var playerDeletedCard2;
var playerDeletedCard3;



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
  $('<div id="banner">Ready... \nFight!<div>').appendTo('container');
  var bannerText = document.getElementById('banner');
  window.setTimeout(function(){bannerText.innerHTML = ""}, 1500);
  deployCards(player);
});
$('#houseLannister').click(function() {
  $('.familyDiv').remove();
  $('#mainTitle').remove();
  $('.mainDiv').remove();
  $('body').css({'background-image': "url(./images/map.jpg)", 'background-size': "cover", 'height': "100%"});
  player = 2;
  $('<div id="banner">Ready... \nFight!<div>').appendTo('container');
  var bannerText = document.getElementById('banner');
  window.setTimeout(function(){bannerText.innerHTML = ""}, 1500);
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
  $(`#row2 .0`).click(function() {
    $('#row1 div').css('border', "0");
    playerCardPower = starkFamily[0].power;
    playerCardDef = starkFamily[0].def;
    playerCard = $('#row2 div')[0];
    selection = 0;
    console.log("cpuDeletedCard1 is" + cpuDeletedCard1 + "cpuDeletedCard2 is" + cpuDeletedCard2 );
    cpuLannisterRandom(cpuDeletedCard1,cpuDeletedCard2,cpuDeletedCard3)
    cardComparing(playerCardPower, playerCardDef, cpuCardPower, cpuCardDef,
      cpuCard, playerCard,rand, cpuDeletedCard1, cpuDeletedCard2, cpuDeletedCard3 )
  })
  $(`#row2 .1`).click(function() {
    $('#row1 div').css('border', "0");
    playerCardPower = starkFamily[1].power;
    playerCardDef = starkFamily[1].def;
    playerCard = $('#row2 div')[1];
    selection = 1;
    console.log(playerCardPower);
    console.log(playerCardDef);
    cpuLannisterRandom(cpuDeletedCard1,cpuDeletedCard2,cpuDeletedCard3)
    cardComparing(playerCardPower, playerCardDef, cpuCardPower, cpuCardDef, cpuCard,
      playerCard, rand, cpuDeletedCard1, cpuDeletedCard2, cpuDeletedCard3)
  })
  $(`#row2 .2`).click(function() {
    $('#row1 div').css('border', "0");
     playerCardPower = starkFamily[2].power;
     playerCardDef = starkFamily[2].def;
     playerCard = $('#row2 div')[2];
     selection = 2;
     console.log(playerCardPower);
     console.log(playerCardDef);
     cpuLannisterRandom(cpuDeletedCard1,cpuDeletedCard2,cpuDeletedCard3)
     cardComparing(playerCardPower, playerCardDef, cpuCardPower, cpuCardDef, cpuCard,
      playerCard, rand, cpuDeletedCard1, cpuDeletedCard2, cpuDeletedCard3)
  })
 } else {
  $(`#row2 .0`).click(function() {
    $('#row1 div').css('border', "0");
     playerCardPower = lannisterFamily[0].power;
     playerCardDef = lannisterFamily[0].def;
     playerCard = $('#row2 div')[0];
     selection = 0;
     console.log(playerCardPower);
     console.log(playerCardDef);
     cpuStarkRandom()
     cardComparing(playerCardPower, playerCardDef, cpuCardPower, cpuCardDef, cpuCard, playerCard, rand)
  })
   $(`#row2 .1`).click(function() {
    $('#row1 div').css('border', "0");
     playerCardPower = lannisterFamily[1].power;
     playerCardDef = lannisterFamily[1].def;
     playerCard = $('#row2 div')[1];
     selection = 1;
     console.log(playerCardPower);
     console.log(playerCardDef);
     cpuStarkRandom()
     cardComparing(playerCardPower, playerCardDef, cpuCardPower, cpuCardDef, cpuCard, playerCard, rand)
  })
    $(`#row2 .2`).click(function() {
    $('#row1 div').css('border', "0");
     playerCardPower = lannisterFamily[2].power;
     playerCardDef = lannisterFamily[2].def;
     playerCard = $('#row2 div')[2];
     selection = 2;
     console.log(playerCardPower);
     console.log(playerCardDef);
     cpuStarkRandom()
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
  cpuCardPower = starkFamily[rand].power;
  cpuCardDef = starkFamily[rand].def;
  console.log(cpuCardPower);
  console.log(cpuCardDef);
}

function cardComparing() {
  if (playerCardPower >= cpuCardDef && cpuCardPower >= playerCardDef) {
      var bannerText = document.getElementById('banner');
      bannerText.innerHTML = "Your opponent is\n"+ cpuCard.id+"!"
      $(bannerText).css('font-size', "100px");
      setTimeout(function(){bannerText.innerHTML = ""}, 2000);
      setTimeout(function(){$('<img src="./images/erase.png">').appendTo(playerCard)
      $('<img src="./images/erase.png">').appendTo(cpuCard)}, 2500)
      setTimeout(function(){alert("Both side's member got killed")}, 3000);
      $(playerCard).css('border', "0");  // deleted the hover effect from card
      if (rand == 0){
        cpuDeletedCard1 = 1
      } else if (rand == 1){
        cpuDeletedCard2 = 1;
      }else {
        cpuDeletedCard3 = 1;
      }
      if (selection == 0){
        playerDeletedCard1 = 1;
      } else if (selection ==1){
        playerDeletedCard2 = 1;
      } else {
        playerDeletedCard3 = 1;
      }
  } else if (playerCardPower >= cpuCardDef) {
      var bannerText = document.getElementById('banner');
      bannerText.innerHTML = "Your opponent is\n"+ cpuCard.id+"!"
      $(bannerText).css('font-size', "100px");
      setTimeout(function(){bannerText.innerHTML = ""}, 2000);
      setTimeout(function(){$('<img src="./images/erase.png">').appendTo(cpuCard)}, 2500);
      setTimeout(function(){alert("You won this fight")}, 3000);
       if (rand == 0){
        cpuDeletedCard1 = 1
      } else if (rand == 1){
        cpuDeletedCard2 = 1;
      }else {
        cpuDeletedCard3 = 1;
      }
  } else if (cpuCardPower >= playerCardDef) {
      var bannerText = document.getElementById('banner');
      bannerText.innerHTML = "Your opponent is\n"+ cpuCard.id+"!"
      $(bannerText).css('font-size', "100px");
      setTimeout(function(){bannerText.innerHTML = ""}, 2000);
      setTimeout(function(){$('<img src="./images/erase.png">').appendTo(playerCard)}, 2500);
      setTimeout(function(){alert("You lost this fight")}, 3000);
      $(playerCard).css('border', "0");
        if (selection == 0){
        playerDeletedCard1 = 1;
      } else if (selection ==1){
        playerDeletedCard2 = 1;
      } else {
        playerDeletedCard3 = 1;
      }
      console.log(playerCard);
      console.log(cpuCard);
  } else {
      alert("Draw! Select another card to fight");
  }
  setTimeout(function(){winCheck()}, 3500);
}

function winCheck() {
  if (cpuDeletedCard1 == 1 && cpuDeletedCard2 == 1 && cpuDeletedCard3 ==1 &&
    playerDeletedCard1 == 1 && playerDeletedCard2 == 1 && playerDeletedCard3 ==1) {
    var bannerText = document.getElementById('banner');
    bannerText.innerHTML = "Tie Game!"
    $(bannerText).css('font-size', "150px")
    setTimeout(function(){alert("But at leasst Westeros get the peace\nRematch?")}, 1500);
    alert("But at leasst Westeros get the peace\nRematch?")
  }
  else if (cpuDeletedCard1 == 1 && cpuDeletedCard2 == 1 && cpuDeletedCard3 ==1){
    var bannerText = document.getElementById('banner');
    bannerText.innerHTML = "You Win!"
     $(bannerText).css('font-size', "150px")
    setTimeout(function(){alert("Congradulation!! Your family win the thrones\nRematch?")}, 1500);
  } else if (playerDeletedCard1 == 1 && playerDeletedCard2 == 1 && playerDeletedCard3 ==1){
    var bannerText = document.getElementById('banner');
    bannerText.innerHTML = "You Lose!"
    $(bannerText).css('font-size', "150px")
    setTimeout(function(){alert("Your family lost this battle\nRematch?" )}, 1500);
  }
}

