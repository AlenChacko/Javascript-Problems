// Coding challenge #12: Create a function that receives an array of numbers and returns an array containing only the positive numbers

let arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];

let positiveArray = (arr) => {
    let positiveNums = [];
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] >= 0){
            positiveNums.push(arr[i]);
        }
    }
    console.log(positiveNums);
}

positiveArray(arr)