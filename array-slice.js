const nums = [5, 7, 89, 55, 21, 36, 7, 89];
const part = nums.slice(1, 4);
const removed = nums.splice(2, 4, 8, 5);

console.log(part);
console.log(removed);
const together = nums.join(",");

console.log(together);
console.log(nums);