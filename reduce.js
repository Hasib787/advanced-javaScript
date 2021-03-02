const numbers = [45, 1, 22, 48, 66, 32, 74];

const total = numbers.reduce((sum, num) => {
    // console.log(sum, num);
    return sum + num;
}
    , 0);
// console.log(total);

const friends = [
    { name: 'Rakib', money: 12 },
    { name: 'Munira', money: 17 },
    { name: 'Nandini', money: 50 },
    { name: 'Swarna', money: 100 },
    { name: 'Surovi', money: 86 },
    { name: 'Tonni', money: 45 },
]

const result = friends.reduce((sum, friend) => sum + friend.money, 0);
console.log(result);
