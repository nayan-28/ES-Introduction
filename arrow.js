// function add(a, b) {
//     const result = a + b;
//     return result;
// }

function add(a, b) {
    return a + b;
}

const sum = add(5, 6);
console.log(sum);


const add2 = function(a, b) {
    return a + b;
}


const add3 = (a, b) => a + b;


const newSum = add3(25, 60);
console.log(newSum);
