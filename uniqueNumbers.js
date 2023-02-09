let arr= [4, 2, 4, 5, 2, 3, 1];
let findUnique = (arr) => {
    let set = new Set(arr);
    return set;
}


let ans = findUnique(arr);
console.log(ans)