// Coding challenge #4: Print all the multiplication tables with numbers from 1 to 10


let printTable = (n) => {
    for (let i = 1; i <= 10; i++) {
       let row = i*n;
       console.log(i +" * "+ n + " = ",row)
        
    }
}


for (let i = 1; i <= 10; i++) {
   printTable(i)
    
}