const {a:x}=require('./file1')
const {a:y}=require('./file2')

// const addFun=require('./Utils/add');
// const {sub}=require('./Utils/sub');
const {add,sub}=require('./Utils/index')
console.log(add(x,y))
console.log(sub(x,y))