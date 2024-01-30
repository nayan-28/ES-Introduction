const max = Math.max(35, 564, 4987, 76778, 874874, 8444584)

console.log(max);

const numbers = [2, 6, 54, 4, 521, 164, 654];
const arrayMax = Math.max(...numbers);
console.log(arrayMax);


const nums = [1, 2, 3, 4, 5];

const friends = [...nums];

friends.push(12);
console.log(friends);
console.log(nums);
