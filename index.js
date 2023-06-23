/* for (let age = 30; age < 40; age++){
    console.log(`I'm ${age} years old. Happy Birthday to me!`);
}


const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }

  return gifts;
}

wrapGifts(gifts);
*/

function writeCards(array, event){
    const newArr = []
    for (let i = 0; i < array.length; i++){
        newArr[i]=`Thank you, ${array[i]}, for the wonderful ${event} gift!`
    }
    return newArr
}

function countDown(number){
    let count = number;
    while (count >= 0){
        console.log(count)
        count--
    }
}