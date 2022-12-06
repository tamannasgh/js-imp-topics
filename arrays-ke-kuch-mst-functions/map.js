const arr = [1,2,3,4,5];

const squaredArr = arr.map( function(num, index, arr){
    return num**2;
});

console.log(squaredArr);

//map ko tb us krte h jb humein ek naya array chaiye hota h, jisme puraane array ki values ke saath kuch krna hota h