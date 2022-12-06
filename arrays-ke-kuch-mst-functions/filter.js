const arr = [1,2,3,4,5,6,7,8,9,10];

const evenNums = arr.filter(function(num){
    if(num % 2 === 0){
        return num;
    }
});
console.log(evenNums);

//filter tb use krte h jb humein filter krna hota h ek existed array mei se jse is case mai mere pe ye arr tha or mujhe chahiye the evenNums to simple filter use kr skte ho aisi situatuions mein.