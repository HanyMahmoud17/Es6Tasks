
// task 1
// let obj = {
//   name: '',
//   address: '',
//   age: 0
// };

// let handler = {
//   get(obj, prop) {
//     if (obj.hasOwnProperty(prop)) {
//       console.log(prop);
//     }
//     else {
//       throw 'no prop here'
//     }
//   },
//   set(obj, prop, value) {
//     if (prop === 'name' && typeof value === 'string' && value.length === 7) {
//       obj[prop] = value;
//     } else if (prop === 'address' && typeof value === 'string') {
//       obj[prop] = value;
//     } else if (prop === 'age' && (typeof value === 'number') && (value >= 25 && value <= 60)) {
//       obj[prop] = value;
//     } else {
//       throw new Error(`Invalid property value for ${prop}`);
//     }
//   }
// };

// let proxyObj = new Proxy(obj, handler)

// test cases for erorr
// first this name is ok

// proxyObj.name = 'JohnDoe';
// name has a number

// proxyObj.name = 'JohnDoe1';
// proxyObj.address = '123 Main St.';

// proxyObj.age = 20;

// console.log(proxyObj);

// task 2


// function *fibonacci(arg) {
//   let preveios = 0;
//   let current = 1;

//   for (let i = 0; i < arg; i++) {
//     yield current;
//     var next = preveios + current;
//     // console.log(next);
//     preveios = current;
//     current = next;
//   }
// }

// let gen = fibonacci(8);
// let series = [];

// for (let num of gen) {
//   series.push(num);
// }

// console.log(series);


// task 3

// let obj={
//     name:"abdo meky",
//     age:25,
//     address:'aswan',
//     phone:"01123349994",
//     id:1
// }
// obj[Symbol.iterator]=function()
// {
//     let i=0;
//     let keys=Object.keys(this);
//     let values=Object.values(this);
//     return{
//         next:function()
//         {
//             if(i<keys.length)
//             {
//                 let ob={value:`${keys[i]} : ${values[i]}`,done:false}
//                 i++;
//                 return ob;
//             }
//             else
//             {
//                 return{value:undefined,done:true};
//             }

//         }
//     }
// }

// for(let val of obj) // call next() 
// {
//     console.log(val) //next().value
// }

// task 4


// let fruits = ["apple", "strawberry", "banana", "orange", "mango"];


// let isAllStrings = fruits.map((fruit) => typeof fruit === 'string');
// console.log('Every element is a string:', isAllStrings); 


// let someStartsWithA = fruits.map((fruit) => fruit.startsWith('a'));
// console.log('Some elements start with "a":', someStartsWithA); 

// let filteredFruits = fruits.filter((fruit) => fruit.startsWith('b') || fruit.startsWith('s'));
// console.log('Filtered fruits:', filteredFruits); 

// let likedFruits = fruits.map((fruit) => `I like ${fruit}`);
// console.log('Liked fruits:', likedFruits);


// likedFruits.forEach((fruit) => console.log(fruit));