// Coding challenge #11: Calculate the average of the numbers in an array of numbers;


let array = [2, 3, -1, 5, 7, 9, 10, 15, 95];

let findAverage = (arr) => {
    let n = arr.length;
    let sum = 0;
    for(let i = 0; i< n-1; i++){
        sum = sum + arr[i];
    }

    let average = sum/n;
    console.log(average)
}


findAverage(array)