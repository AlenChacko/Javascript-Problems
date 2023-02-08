//Coding challenge #10: Calculate the sum of numbers in an array of numbers;


let array = [2, 3, -1, 5, 7, 9, 10, 15, 95];

let  findSum = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length-1; i++) {
        sum = sum + arr[i]
    }
    console.log(sum);
}


findSum(array);