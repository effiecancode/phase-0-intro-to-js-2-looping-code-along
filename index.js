// hello for loop 🤩

function writeCards(arr, name) {

    arr = [];
    for(i = 0; i < arr.length; i++) {
        console.log(`Thankyou ${arr[i]} for your ${name}.`);

        return arr;
        debugger;
    }

    const newarr = [arr];
    return newarr;
}

writeCards(['effie', 'simp', 'code'], 'service');
