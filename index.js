// Code your solutions in this file
// index.js

// Function to write cards
function writeCards(namesArray, event) {
  let messages = [];
  for (let i = 0; i < namesArray.length; i++) {
    messages.push(
      `Thank you, ${namesArray[i]}, for the wonderful ${event} gift!`
    );
  }
  return messages;
}

// Function to count down
function countDown(number) {
  while (number >= 0) {
    console.log(number);
    number--;
  }
}

// index.js

module.exports = {
  writeCards,
  countDown,
};
