'use strict';

let correctAnswers = [];

alert("WOooW THERE, STRANGER! Where do you think you're going?");

let userName = prompt('Let\'s get acquainted first. What\'s your name?');
console.log(userName);

alert('Hi, ' + userName + '! Before I can let you in here, get to know me by answering the following questions beforehand:');

function spicyQ() {
  let firstQ = prompt('Do I like spicy food (Y / N)?').toLowerCase();
  console.log(firstQ);
  if (firstQ === 'y' || firstQ === 'yes') {
    correctAnswers.push(firstQ);
    console.log('Correct! The spicier, the better.');
    alert('Correct! The spicier, the better.');
  } else if (firstQ === 'n' || firstQ === 'no') {
    console.log('Wrong! I love spicy food.');
    alert('Wrong! I love spicy food.');
  } else {
    console.log('Sorry, buddy. You need to answer with a \'Y\' or a \'N\'');
    alert('Sorry, buddy. You need to answer with a \'Y\' or a \'N\'');
  }
}

spicyQ();

function socialQ() {
  let secondQ = prompt('Would I describe myself as a social person? (Y / N)?').toLowerCase();
  console.log(secondQ);
  if (secondQ === 'n' || secondQ === 'no') {
    correctAnswers.push(secondQ);
    console.log('Duh, social situations are scary');
    alert('Duh, social situations are scary');
  } else if (secondQ === 'y' || secondQ === 'yes') {
    console.log('I can come across as extroverted, but I am a huge introvert');
    alert('I can come across as extroverted, but I am a huge introvert');
  } else {
    console.log('Sorry, pal. You need to answer with a \'Y\' or a \'N\'');
    alert('Sorry, pal. You need to answer with a \'Y\' or a \'N\'');
  }
}

socialQ();

function surfQ() {
  let thirdQ = prompt('Do I own and use a surfboard? (Y / N)?').toLowerCase();
  console.log(thirdQ);
  if (thirdQ === 'y' || thirdQ === 'yes') {
    correctAnswers.push(thirdQ);
    console.log('Yep! I own and use a surfboard... Doesn\'t mean I am good at it though lol');
    alert('Yep! I own and use a surfboard... Doesn\'t mean I am good at it though lol');
  } else if (thirdQ === 'n' || thirdQ === 'no') {
    console.log('Wronggg. I do own and use a surfboard in Florida.');
    alert('Wronggg. I do own and use a surfboard in Florida.');
  } else {
    console.log('You need to answer with a \'Y\' or a \'N\'');
    alert('You need to answer with a \'Y\' or a \'N\'');
  }
}

surfQ();

function kidQ() {

  let fourthQ = prompt('I have two kids (Y / N)?').toLowerCase();
  console.log(fourthQ);
  if (fourthQ === 'y' || fourthQ === 'yes') {
    console.log('Yep! I have a daughter and a son.');
    correctAnswers.push(fourthQ);
    alert('Yep! I have a daughter and a son.');
  } else if (fourthQ === 'n' || fourthQ === 'no') {
    console.log('Nope, I have 2 children!');
    alert('Nope, I have 2 children!');
  } else {
    console.log('You need a \'Y\' or a \'N\'');
    alert('You need a \'Y\' or a \'N\'');
  }
}

kidQ();

function tvQ() {
  let fifthQ = prompt('Have I ever been on TV (Y / N)?').toLowerCase();
  console.log(fifthQ);
  if (fifthQ === 'n' || fifthQ === 'no') {
    correctAnswers.push(fifthQ);
    console.log('You\'re right! i\'m not interesting enough to be on TV');
    alert('You\'re right! i\'m not interesting or toxic enough to be on TV lol');
  } else if (fifthQ === 'y' || fifthQ === 'yes') {
    console.log('Wrong! I\'ve never been on TV');
    alert('Wrong! I am not interesting or outgoing enough');
  } else {
    console.log('Sorry, buddy. You need to answer with a \'Y\' or a \'N\'');
    alert('You need to answer with a \'Y\' or a \'N\'');
  }
}

tvQ();

function ageQ() {
  let firstRemaining = 4;
  let sixthQ = prompt('How old am I?');
  firstRemaining--;
  sixthQ = parseInt(sixthQ);

  console.log(typeof sixthQ);
  while (sixthQ !== 27 && firstRemaining > 0) {
    firstRemaining--;
    if (sixthQ < 27) {
      alert("I'm older than that! Try again.");
    }
    if (sixthQ > 27) {
      alert("Hey, I'm not that old! Try again.");
    }
    sixthQ = prompt("Try again. How old am I?");
    sixthQ = parseInt(sixthQ);
  }

  if (sixthQ === 27) {
    correctAnswers.push(sixthQ);
    alert("That is correct!");
  }
  if (firstRemaining === 0 && sixthQ !== 27) {
    alert('The answer was 27');
  }
}

ageQ();


// let secondRemaining = 6;
// let officeFavs = ['stanley', 'creed', 'erin', 'gabe'];
// let seventhQ = prompt('Name one of my top 4 favorite U.S. Office characters!').toLowerCase();
// secondRemaining--;

// let isCorrect = false;
// for (let i = 0; i < officeFavs.length; i++) {
//   let character = officeFavs[i];
//   if (seventhQ === character) {
//     isCorrect = true;
//   }
// }

// while (isCorrect === false && secondRemaining > 0) {
//   alert('Your Answer was incorrect');
//   secondRemaining--;
//   seventhQ = prompt('Name one of my top 4 favorite U.S. Office characters!').toLowerCase();
//   for (let i = 0; i < officeFavs.length; i++) {
//     let character = officeFavs[i];
//     if (seventhQ === character) {
//       isCorrect = true;
//     }
//   }
// }

// if (isCorrect === true) {
//   correctAnswers.push(seventhQ);
//   alert('You got it right! All possible answers were ' + officeFavs[0] + ', ' + officeFavs[1] + ', ' + officeFavs[2] + ', ' + officeFavs[3]);
// }

// if (isCorrect === false) {
//   alert('Out of attempts. All possible answers were ' + officeFavs[0] + ', ' + officeFavs[1] + ', ' + officeFavs[2] + ', ' + officeFavs[3]);
// }

// alert('You got ' + correctAnswers.length + ' answers correct');

// alert('Alriiight, ' + userName + '. We\'re buddies now. Come on in!');
