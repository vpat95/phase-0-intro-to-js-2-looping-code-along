// Code your solutions in this file

/*
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
};
*/

/*
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        debugger;
    }

    return gifts;
};

wrapGifts(gifts);
*/

function writeCards (name, occasion) {
    const thankYou = [];
    for (let i = 0; i < name.length; i++) {
        thankYou.push(`Thank you, ${name[i]}, for the wonderful ${occasion} gift!`);
    };
    return thankYou;
};

function countDown (countdown) {
    let i = countdown;
    while (i >= 0) {
        console.log(i);
        i--;
    }
}