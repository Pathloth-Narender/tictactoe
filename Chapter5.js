//reduce method to produce max num
let arr=[7,2,8,4];
let result=arr.reduce((i,j)=>{
    return i>j?i:j;
})
console.log(result);