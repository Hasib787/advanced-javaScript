const numbers = [8, 6, 7, 9, 15, 14, 5];
const output = [];
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    const result = element * element;
    output.push(result);
}
console.log(output);

function square(element) {
    return element * element;
}

const square = element => element * element;
const square = x => x * x;

const result = numbers.map(function square(element) {
    return element * element;
});

const result = numbers.map(x => x * x);

const bigger = numbers.filter(x => x > 9);

const isThere = numbers.find(x => x > 8);
console.log(isThere);
console.log(bigger);