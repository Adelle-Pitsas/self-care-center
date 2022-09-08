//Grabbing variables here:
var receiveMessageButton = document.querySelector('#recieve-message-button');
var radioButtons = document.querySelectorAll('.radio-button'); /*this will give us an array*/
var meditateImage = document.querySelector('#meditateImage');
var messageDisplay = document.querySelector('#message-display');
var homeView = document.querySelector('.home-view');
var loginView = document.querySelector('.login');
var loginButton = document.querySelector('#login-button');
var nameInput = document.querySelector('#name-field');
var greetingSection = document.querySelector('#greeting');


//Making Event Listeners Here:
window.addEventListener('load', displayLogin)

loginButton.addEventListener('click', displayHomeScreen)

receiveMessageButton.addEventListener('click', generateMessage);


//The DATA MODEL:
var messagesToDisplay = [];
var namesToDisplay = [];

//functions that called in event listeners:
function generateMessage() {
  for(var i = 0; i < radioButtons.length; i++) {
    if(radioButtons[i].checked && radioButtons[i].id === 'affirmation-button') {
      messagesToDisplay = [];
      messagesToDisplay.push(affirmations[getRandomNumber(affirmations.length)])
    }
    if (radioButtons[i].checked && radioButtons[i].id === 'mantra-button') {
      messagesToDisplay = [];
      messagesToDisplay.push(mantras[getRandomNumber(mantras.length)])
    }
  } displayMessage();
}

function displayLogin(){
  homeView.classList.add("hidden");
  loginView.classList.remove("hidden");
}

function displayHomeScreen() {
  event.preventDefault();
  loginView.classList.add("hidden");
  homeView.classList.remove("hidden");
  getLoginInfo();
  displayGreeting();
}

//functions that are used in event handlers:
function displayMessage() {
  removeImage();
  messageDisplay.innerHTML = ''
  for (var i = 0; i < messagesToDisplay.length; i++) {
    messageDisplay.innerHTML += `
    <p>${messagesToDisplay[i]}</p>
    `
  }
}

function removeImage() {
  meditateImage.classList.add('hidden');
}


function getRandomNumber(arrayLength) {
  return Math.floor(Math.random()* arrayLength)
};

function getLoginInfo() {
  namesToDisplay = []
  namesToDisplay.push(nameInput.value)
}

function displayGreeting() {
  greetingSection.innerHTML = ''
  for (var i = 0; i < namesToDisplay.length; i++) {
    greetingSection.innerHTML += `
    <h2>Welcome back ${namesToDisplay[i]}!
    `
  }
}




//Arrays:
var affirmations = [
  'I forgive myself and set myself free.',
  'I believe I can be all that I want to be.',
  'I am in the process of becoming the best version of myself.',
  'I have the freedom & power to create the life I desire.',
  'I choose to be kind to myself and love myself unconditionally.',
  'My possibilities are endless.',
  'I am worthy of my dreams.',
  'I am enough.',
  'I deserve to be healthy and feel good.',
  'I am full of energy and vitality and my mind is calm and peaceful.',
  'Every day I am getting healthier and stronger.',
  'I honor my body by trusting the signals that it sends me.',
  'I manifest perfect health by making smart choices.'
]

var mantras = [
  'Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.',
  'Don’t let yesterday take up too much of today.',
  'Every day is a second chance.',
  'Tell the truth and love everyone.',
  'I am free from sadness.',
  'I am enough.',
  'In the beginning it is you, in the middle it is you and in the end it is you.',
  'I love myself.',
  'I am present now.',
  'Inhale the future, exhale the past.',
  'This too shall pass.',
  'Yesterday is not today.',
  'The only constant is change.',
  'Onward and upward.',
  'I am the sky, the rest is weather.'
]
