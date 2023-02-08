// Coding challenge #8: Create a function that will convert from Celsius to Fahrenheit;


let convertToFahrenheit = (celsius) => {
    let result =( celsius*9/5)+32;
    console.log(result);
}


convertToFahrenheit(45);



// Coding challenge #9: Create a function that will convert from Fahrenheit to Celsius;


let convertToCelsius = (fahrenheit) => {
    let res = (fahrenheit-32) * 5/9;
    console.log(res);
}


convertToCelsius(70);