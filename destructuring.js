const actor = {
    name: "Nayan",
    phone: '01982693881',
    age: 24,
    money: 'Neiiii'
}

const { name: myname, phone, age: boyos } = actor;

console.log(phone);
console.log(boyos);
console.log(myname);


const numbers = [45, 92, 50]
const [first, second] = numbers;
const [x, y] = [12, 66];


function doubleThem(a, b) {
    return [a * 2, b * 2]
}

const [prothom, ditiyo] = doubleThem(6, 9);
console.log(prothom, ditiyo);
