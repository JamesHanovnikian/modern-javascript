var moment = require('moment'); // require
moment().format();


var dayjs = require('dayjs');
//import dayjs from 'dayjs' // ES 2015
dayjs().format();


console.log("Hello! from Javascript");
console.log(moment().startOf('day').fromNow());



console.log(dayjs().date());

var city = "Chicago";
console.log(`I currently live in ${city}`);
console.log(`${city}`);


// npm install moment --save
// Link the library to your html file. 
// 

