// (function f1(){
//     console.log('Karim')
// })();
// (function f1(){
//     console.log('Rahim')
// })();


// const x=require('./file1')
//                                 //common js
// console.log(x)
const {a:x}=require('./file1')
const {a:y}=require('./file3')
                                //common js
// const add=require('./Utils/add')
// const sub=require('./Utils/sub')

// console.log("Addition:",add(x,y))

const {f1:add, f2:sub}= require('./Utils/index')
console.log("Addition:",add(x,y))
console.log("Substraction:",sub(x,y))

console.log(x,y)