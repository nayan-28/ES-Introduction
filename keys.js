const glass = {
    name: 'glass',
    color: 'golden',
    price: 12,
    isCleaned: true
}


const keys = Object.values(glass);

console.log(keys);


// delete glass.isCleaned;
/*array of array*/
const pair = Object.entries(glass);
// console.log(pair);



const { isCleaned, ...shortGlass } = glass;
// console.log(shortGlass);


Object.freeze(glass);
glass.source = 'Bangladesh';
glass.price = 50000;
delete glass.name;
console.log(glass);

Object.seal(glass);
glass.source = 'Bangladesh';
glass.price = 50000;
delete glass.name;
console.log(glass);
