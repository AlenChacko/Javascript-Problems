let arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
// let reversedArray = arr.reverse();
// console.log(reversedArray);


let reversedArray = []
for (let i = arr.length - 1; i >= 0; i--) {
   reversedArray.push(arr[i])
  }


  console.log(reversedArray)