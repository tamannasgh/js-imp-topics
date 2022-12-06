const arr = [1,2,3,4,5];

const sum = arr.reduce(function(prev, curr){
   if(curr % 2 === 0){
    prev.push(curr);
   }
   return prev;
}, []);

console.log(sum);