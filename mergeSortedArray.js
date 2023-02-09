let arr1 = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
let arr2 = [-8, 70, -2, 22, 9, 2, 30, 6, 0];

let sortArray = (arr) => {
    let temp = 0;
    for(let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
           if(arr[i] < arr[j]){
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
           }
        }
    }
    return arr;
}

sortArray(arr1);
sortArray(arr2)

let arr3 = [...arr1,...arr2];

console.log(arr3)
let final = sortArray(arr3);
console.log(final)