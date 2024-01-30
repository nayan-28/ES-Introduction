const difference = (x, y) => x - y;
const multiply = (first, second, third) => first * second * third;

const getAge = (person) => person.age;
const student = {
    name: 'Nayan',
    age: 45
}
const age = getAge(student);
console.log(age);
const getThird = numbers => numbers[2];

const third = getThird([5, 9, 8, 7, 5]);

console.log(third);

const getPI = () => Math.PI;
console.log(getPI());


const largeMath = (x, y, z) => {

    const mathSum = x + y + z;
    const mathMultiply = x * y * z;
    const totalValue = mathSum + mathMultiply;

    return totalValue;
}

const doMath = largeMath(50, 60, 90);
console.log(doMath);
