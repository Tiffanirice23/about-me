'use strict';

alert("WOooW THERE, STRANGER! Where do you think you're going?");

let userName = prompt('Let\'s get acquainted first. What\'s your name?')
console.log(userName);

alert('Hi, ' + userName + '! Before I can let you in here, get to know me by answering the following questions beforehand:')

let firstQ = prompt('Do I l like spicy food (Y / N)?').toLowerCase();
console.log(firstQ);
if (firstQ === 'y' || firstQ === 'yes') {
  // console.log('Correct! The spicier, the better.');
  alert('Correct! The spicier, the better.');
} else if (firstQ === 'n' || firstQ === 'no') {
  // console.log('Wrong! I love spicy food.');
  alert('Wrong! I love spicy food.');
} else {
  // console.log('Sorry, buddy. You need to answer with a \'Y\' or a \'N\'');
  alert('Sorry, buddy. You need to answer with a \'Y\' or a \'N\'');
}


let secondQ = prompt('Would I describe myself as a social person? (Y / N)?').toLowerCase();
console.log(secondQ);
if (secondQ === 'n' || secondQ === 'no') {
  // console.log('Duh, social situations are scary');
  alert('Duh, social situations are scary');
} else if (secondQ === 'y' || secondQ === 'yes') {
  // console.log('I can come across as extroverted, but I am a huge introvert');
  alert('I can come across as extroverted, but I am a huge introvert');
} else {
  // console.log('Sorry, pal. You need to answer with a \'Y\' or a \'N\'')
  alert('Sorry, pal. You need to answer with a \'Y\' or a \'N\'');
}

let thirdQ = prompt('Do I own and use a surfboard? (Y / N)?').toLowerCase();
console.log(thirdQ);
if (thirdQ === 'y' || thirdQ === 'yes') {
  // console.log('Yep! I own and use a surfboard... Doesn\'t mean I am good at it though lol');
  alert('Yep! I own and use a surfboard... Doesn\'t mean I am good at it though lol');
} else if (thirdQ === 'n' || thirdQ === 'no') {
  // console.log('Wronggg. I do own and use a surfboard in Florida.');
  alert('Wronggg. I do own and use a surfboard in Florida.')
} else {
  // console.log('You need to answer with a \'Y\' or a \'N\'')
  alert('You need to answer with a \'Y\' or a \'N\'')
}


let fourthQ = prompt('I have two kids (Y / N)?').toLowerCase();
console.log(fourthQ);
if (fourthQ === 'y' || fourthQ === 'yes'){
  // console.log('Yep! I have a daughter and a son.')
  alert('Yep! I have a daughter and a son.');
} else if (fourthQ === 'n' || fourthQ === 'no') {
  // console.log('Nope, I have 2 children!');
  alert('Nope, I have 2 children!');
} else {
  // console.log('You need a \'Y\' or a \'N\'')
  alert('You need a \'Y\' or a \'N\'');
}

let fifthQ = prompt('Have I ever been on TV (Y / N)?').toLowerCase();
console.log(fifthQ);
if (fifthQ === 'n' || fifthQ === 'no') {
  // console.log('You\'re right! i\'m not interesting or toxic enough to be on TV lol');
  alert('You\'re right! i\'m not interesting or toxic enough to be on TV lol');
} else if (fifthQ === 'y' || fifthQ === 'yes') {
  // console.log('Wrong! I am not interesting or outgoing enough');
  alert('Wrong! I am not interesting or outgoing enough');
} else {
  // console.log('Sorry, buddy. You need to answer with a \'Y\' or a \'N\'');
  alert('Sorry, buddy. You need to answer with a \'Y\' or a \'N\'');
}

alert('Alriiight, I will let you in, ' + userName + '. 5 facts about me is enough(for now).');
