// hello for loop 🤩

function writeCards(arr, name) {
    for(i = 0; i < arr.length; i++) {
        console.log(`Thankyou ${arr[i]} for your ${name}.`);

        return arr;
    }
    debugger;

    const newarr = [arr];
    return newarr;
}

writeCards(['effie', 'simp', 'code'], 'service');



// // for (let age = 30; age < 40; age++) {
// //     console.log(`am ${age} years old`);
// //     // debugger;
// // }

// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//   for (let i = 0; i < gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     debugger;
//   }

//   return gifts;
// }

// wrapGifts(gifts);
