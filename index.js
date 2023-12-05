// hello for loop 🤩
// func returns an array of thank you messages for each name provided to the function

function writeCards(names, eventName) {
    let thankYouMessages = [];

    if (!Array.isArray(names)) {
      return 'Please provide an array of names.';
    }

    names.forEach(name => {
      let message = `Thank you, ${name}, for the wonderful ${eventName} gift!`;
      thankYouMessages.push(message);
    });

    return thankYouMessages;
  }

// test the function

// const listOfNotes = (writeCards(['effie', 'simp', 'code'], 'gift'));
// console.log(listOfNotes);


//write a function, countDown, that takes in any positive integer and,
// starting from that number, counts down to zero using console.log()
function countDown(int) {
    while (int >= 0) {
        console.log(int);
        int--;
    }
    return int;
}

const nums = countDown(10);
console.log(nums);
