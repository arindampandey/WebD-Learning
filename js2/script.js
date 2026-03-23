console.log("Hello How are you ??")

let a = 5;
var b = 7;
let c = "Hello"

// var is globally scoped and let is block scoped

// console.log(a+b+3)
// console.log(typeof a,typeof c)

{
    let a = 66
    console.log(a)
}

console.log(a)
// const x = 99;
// x = x+1 (Not allowelet)

let x = "Name";
let y = 99;
let z = 7.11;
const p = true;
let q = undefined;
let r = null;

console.log(x, y, z, p, q, r)
console.log(typeof x, typeof y, typeof z, typeof p, typeof q, typeof r)

// Note: typeof null is object 

let o={
    "name": "Rohan",
    "job code": 5600,
    "is_married": true
}

console.log(o)
o.salary = 40000;
console.log(o)
o.salary = 50000;
console.log(o)