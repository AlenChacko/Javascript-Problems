//Coding challenge #13: Find the maximum numberin an array;
let arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];

let  findMax = (arr) => {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
       if(arr[i] > max) {
        max = arr[i];
       } 
    }
    console.log(max);
}


findMax(arr);