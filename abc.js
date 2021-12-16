
// -------------------- undefined --------------------------------
// Array
const info1 = ['Quang', 23]

console.log(info1[3]) //undefined

// Object
const info2 = {
    name: 'Quang',
    age: 23
}

console.log(info2.address); //undefined

// Function
const doSomething = (name) => {
    console.log(name);
}

doSomething() //undefined

// -------------------- null --------------------------------
let user = {
    name: 'Nguyen Van A',
    age: 22
}

user = null

console.log(user);

// -------------------- So sánh == và === --------------------------------
// So sánh ==
const a = null
const b = undefined

console.log(a == b); // true

// So sánh ===
const c = null
const d = undefined

console.log(c === d); // false