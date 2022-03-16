//forecast today in kelvin
const kelvin = 0;

//convert kelvin to celsius
const celsius = kelvin - 273;

//convert celsius to fahrenheit, farenheit value to be rounded down to whole number
let fahrenheit = celsius * (9/5) + 32;
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

//convert celsius to newton, newton value to be rounded down to whole number
let newton = celsius * (33/100);
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newton.`);