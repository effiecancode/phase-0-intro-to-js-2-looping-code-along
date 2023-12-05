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
