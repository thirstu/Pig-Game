"use strict";
// //////////////selecting classes//////////////
// const rollDice = document.querySelector(".rdice");
// const hold = document.querySelector(".hold");
// const newGame = document.querySelector(".ngame");

// const one = document.querySelector(".one");
// const two = document.querySelector(".two");
// const three = document.querySelector(".three");
// const four = document.querySelector(".four");
// const five = document.querySelector(".five");
// const six = document.querySelector(".six");
// const current0Left = document.querySelector(".c0left");
// const totalLeft = document.querySelector(".totalleft");
// const current0Right = document.querySelector(".c0right");
// const totalRight = document.querySelector(".c0right");
// const player1 = document.querySelector(".player1");
// const player2 = document.querySelector(".player2");

// //////////hide classes//////////////
// const hide1 = function () {
//   return one.classList.add("hidden");
// };
// const hide2 = function () {
//   return two.classList.add("hidden");
// };
// const hide3 = function () {
//   return three.classList.add("hidden");
// };
// const hide4 = function () {
//   return four.classList.add("hidden");
// };
// const hide5 = function () {
//   return five.classList.add("hidden");
// };
// const hide6 = function () {
//   return six.classList.add("hidden");
// };
// ////////////////show classes////////////////////
// const show1 = function () {
//   return one.classList.remove("hidden");
// };
// const show2 = function () {
//   return two.classList.remove("hidden");
//   return;
// };
// const show3 = function () {
//   return three.classList.remove("hidden");
// };
// const show4 = function () {
//   return four.classList.remove("hidden");
// };
// const show5 = function () {
//   return five.classList.remove("hidden");
// };
// const show6 = function () {
//   return six.classList.remove("hidden");
// };
// ///////////////////////////////////

// const showDiceContainer = function () {
//   diceContainer.classList.remove("hidden");
// };
// /////////////////////////////
// const diceContainer = document.querySelector(".dicec");
// let current = 0;
// let currentActiveplayer = 0;
// let totalScore = [0, 0];
// let playing = true;
// // const random = randomDice();
// ////////////////////////

// const randomDice = function () {
//   return Math.trunc(Math.random() * 6) + 1;
// };
// // let curval = randomDice();

// // const randomf = randomDice();
// // console.log(random);
// // console.log(randomf);
// /////////////////////////////////
// ////////////roll dice////////////
// /////////////////////////////////

// //   // console.log(randomDice());
// // });
// // hide3();
// // hide4();
// // hide5();
// // hide1();
// // hide2();
// // hide6();
// let compair;

// rollDice.addEventListener("click", function () {
//   if (playing) {
//     compair = randomDice();
//     hide3();
//     hide4();
//     hide5();
//     hide1();
//     hide2();
//     hide6();

//     document.querySelector(`.dice${compair}`).classList.toggle("hidden");

//     // console.log("hello");
//     // current = curval;
//     if (compair !== 1) {
//       // current0Left.textContent = current = 0;
//       current = current + compair;
//       document.querySelector(`.c0${currentActiveplayer}`).textContent = current;
//       // current = 0;
//     } else {
//       // current0Right.textContent = current = 0;
//       document.querySelector(`.c0${currentActiveplayer}`).textContent = 0;
//       current = 0;
//       currentActiveplayer = currentActiveplayer === 0 ? 1 : 0;
//       // totalScore[currentActiveplayer] = totalScore > 0 ? 0 : 0;
//       // current = current + compair;
//       // document.querySelector(`.c0${currentActiveplayer}`).textContent = current;
//       // current = 0;
//     }
//   }
//   console.log(playing);
//   console.log(compair);
// });
// /////////////////
// ////////////
// //////////
// let holdTotal0 = 0;
// let holdTotal1 = 0;

// hold.addEventListener("click", function () {
//   if (playing) {
//     ////////////////first way//////////////////////////
//     // if (currentActiveplayer === 0) {
//     //   holdTotal0 = holdTotal0 + current;
//     //   // holdTotal0 = 0;
//     // } else {
//     //   holdTotal1 = holdTotal1 + current;
//     //   // holdTotal1 = 0;
//     // }
//     // document.querySelector(`.total${currentActiveplayer}`).textContent =
//     //   currentActiveplayer === 0 ? holdTotal0 : holdTotal1;
//     // current = 0;
//     // currentActiveplayer === 0 ? 1 : 0;
//     ///////////////second way/////////////////
//     // currentActiveplayer === 0
//     //   ? (holdTotal0 = holdTotal0 + current)
//     //   : (holdTotal1 = holdTotal1 + current);
//     // document.querySelector(`.total${currentActiveplayer}`).textContent =
//     //   currentActiveplayer === 0 ? holdTotal0 : holdTotal1;
//     // current = 0;
//     //////////////////third way/////////////////
//     totalScore[currentActiveplayer] = totalScore[currentActiveplayer] + current;

//     document.querySelector(`.c0${currentActiveplayer}`).textContent = current;
//     if (totalScore[currentActiveplayer] >= 100) {
//       // current = 0;
//       // document.querySelector(`.c0${currentActiveplayer}`).textContent = current;
//       // diceContainer.textContent = `player${currentActiveplayer} wins the game`;
//       // document.querySelector(`.c0${currentActiveplayer}`).textContent = 0;

//       document.querySelector(`.dice${compair}`).classList.add("hidden");
//     }
//     // current = 0;
//     document.querySelector(`.c0${currentActiveplayer}`).textContent = 0;

//     if (totalScore[currentActiveplayer] >= 100) {
//       playing = false;
//       document
//         .querySelector(`.player${currentActiveplayer}`)
//         .classList.add("winner");
//     }
//     document.querySelector(`.total${currentActiveplayer}`).textContent =
//       totalScore[currentActiveplayer];
//     current = 0;
//     currentActiveplayer = currentActiveplayer === 0 ? 1 : 0;
//     console.log(totalScore[currentActiveplayer]);

//     console.log(playing);
//     /////////////////////////////////////////
//   }
// });

// // ///////////////buttons/////////////////////
// // const newGame = document.querySelector(".ngame");
// // const rollDice = document.querySelector(".rdice");
// // const hold = document.querySelector(".hold");
// // /////////////////selecting elements//////////////
// // const curr0 = document.querySelector(".c00");

// // //////////

// // rollDice.addEventListener("click", function () {
// //   const rando = Math.trunc(Math.random() * 6) + 1;
// //   const backAndForth = function (v) {
// //     document.querySelector(`.dice${rando}`).classList.contains(v)
// //       ? document.querySelector(`.dice${rando}`).classList.remove(v)
// //       : document.querySelector(`.dice${rando}`).classList.add(v);
// //   };
// //   backAndForth("hidden");
// //   // document.querySelector(`.dice${rando}`).classList.toggle("hidden");
// //   // document.querySelector(`.dice${random}`).classList.add("ontop");
// //   curr0.textContent = rando;

// //   console.log(rando);
// // }
// // });
// const reset = function () {
//   playing = true;
//   currentActiveplayer = currentActiveplayer === 0 ? 0 : 0;
//   hide3();
//   hide4();
//   hide5();
//   hide1();
//   hide2();
//   hide6();
//   current = 0;
//   totalScore[currentActiveplayer] = totalScore[currentActiveplayer] + current;
//   // totalScore[0] = 0;
//   // totalScore[1] = 0;
//   document.querySelector(`.player0`).classList.remove("winner");
//   document.querySelector(`.player1`).classList.remove("winner");

//   document.querySelector(`.total0`).textContent = 0;
//   document.querySelector(`.total1`).textContent = 0;

//   document.querySelector(`.c00`).textContent = 0;
//   document.querySelector(`.c01`).textContent = 0;
// };
// reset();
// newGame.addEventListener("click", reset);

//////////////////////////////////////////
/////////selecting buttons////////////////
const newGame = document.querySelector(`.ngame`);
const rollDice = document.querySelector(`.rdice`);
const hold = document.querySelector(`.hold`);
////////////////////////////////////
//////selecting elements////////////
////////////////////////////////////
/////////current 0/////////////////
const current0Left = document.querySelector(`.c00`);
const current0Right = document.querySelector(`.c01`);
///////////////dices////////////////
const dices = document.querySelectorAll(`.dice`);
// console.log(dices);

////////////////////////////////////////
//////////////values///////////////////
let current = 0;
let currentActiveplayer = 0;
let totalScore = [0, 0];
let rando;
let playing = true;
////////////////////////////////
///////////////////////////////////////////
/////////functions////////////////
//////////switchingPlayers////////
let switchingPlayers = function () {
  document.querySelector(`.c0${currentActiveplayer}`).textContent = 0;
  current = 0;
  currentActiveplayer === 0
    ? (currentActiveplayer = 1)
    : (currentActiveplayer = 0);
};
///////////resetting everything////////////
const resetEverything = function () {
  /////////hiding dices//////////////
  dices.forEach(function (dice) {
    dice.classList.add("hidden");
  });
  /////////resetting current value to 0////////////
  current = 0;
  //////////////showing current value/////////////
  document.querySelector(`.c00`).textContent = current;
  document.querySelector(`.c01`).textContent = current;
  /////////resetting totalScore value to 0////////
  totalScore[0] = 0;
  totalScore[1] = 0;
  //////////////shwoing total score////////////
  document.querySelector(`.total0`).textContent = totalScore[0];
  document.querySelector(`.total1`).textContent = totalScore[1];
  //////////////hiding background color////////////
  document.querySelector(".player0").classList.remove("winner");
  ///////////////////////////////////
  currentActiveplayer = 0;
};
////////////////////////
resetEverything();
/////////////////////////////////////////////
/////////////rolling the dice/////////////
rollDice.addEventListener("click", function () {
  if (playing) {
    /////////hiding dices//////////////
    dices.forEach(function (dice) {
      dice.classList.add("hidden");
    });
    /////////////////random vlues/////////////
    const random = Math.trunc(Math.random() * 6) + 1;
    rando = random;
    ////////////////////////////////////////////

    //////////adding random into current vlues//////

    current = current + rando;
    ////////////////showing current dice////////////
    document.querySelector(`.dice${rando}`).classList.remove("hidden");
    /////////////////////////////////////////
    //////////////showing current value/////////////
    // current = 0;
    //////////////////////////
    document.querySelector(`.c0${currentActiveplayer}`).textContent = current;
    // current0Left.textContent = current;

    //////////////////////////////////////////
    ////////////switching player//////////

    if (rando === 1) {
      current = 0;
      switchingPlayers();
    }
    console.log(currentActiveplayer);
  }
});

/////////////////////////////////////////
////////////holding the value///////////
///////////////////////////////////////

hold.addEventListener("click", function () {
  if (playing) {
    //////adding in total score////////////////
    currentActiveplayer === 0
      ? (totalScore[currentActiveplayer] =
          totalScore[currentActiveplayer] + current)
      : (totalScore[currentActiveplayer] =
          totalScore[currentActiveplayer] + current);
    //////////////shwoing total score////////////
    document.querySelector(`.total${currentActiveplayer}`).textContent =
      totalScore[currentActiveplayer];
    ////////////////////////////////////////
    if (totalScore[currentActiveplayer] >= 100) {
      ///////changing background color/////////
      document
        .querySelector(`.player${currentActiveplayer}`)
        .classList.add("winner");
      /////////hiding dices////////////
      dices.forEach(function (dice) {
        dice.classList.add("hidden");
        //////////stoping to play/////////////
        playing = false;
      });
    }
    ////////////switching player///////////

    switchingPlayers();

    console.log(rando);
  }
});

////////////////////////////////////////
//////////new game//////////////////////
////////////////////////////////////////
newGame.addEventListener("click", resetEverything);
