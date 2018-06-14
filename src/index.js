// numbers is an array of numbers. Multiply all
// numbers contained in array by multiplier
function multiply(numbers, multiplier) {
  let numbersClone = numbers.map(function(number) {
    return number * multiplier;
  });

  return numbersClone;
}

exports.multiply = multiply;

// is an array of positive and negative numbers
// make them all absolute numbers
function absolute(numbers) {
  let numbersClone = numbers.map(function(number) {
    return number < 0 ? (number *= -1) : number;
  });
  return numbersClone;
}
exports.absolute = absolute;

// names is an array of name of nameObjects
// {
//   firstName: 'Alan',
//   lastName: 'Sugar'
// }
// concatenate first and last names and return
// resulting array of names
function concatNames(names) {
  const fullName = names.map(function(name) {
    return `${name.firstName} ${name.lastName}`;
  });

  return fullName;
}
exports.concatNames = concatNames;

// things is an array of numbers and strings. Convert
// numbers in array to strings. For example 5 to "5"
function numbersToStrings(things) {
  const strings = things.map(
    thing => (typeof thing === "number" ? thing + "" : thing)
  );

  return strings;
}
exports.numbersToStrings = numbersToStrings;

// strings is an array of strings. sort them by length
function sortByLength(strings) {
  const stringClone = [...strings];

  stringClone.sort((a, b) => a.length - b.length);

  // stringClone.sort(function(a, b) {
  //   return a.length - b.length;
  // });
  return stringClone;
}

exports.sortByLength = sortByLength;

// numbers is an array of numbers. Get last two numbers
// from numbers
function lastTwo(numbers) {
  const numbersClone = [...numbers];
  return numbersClone.splice(-2);
}
exports.lastTwo = lastTwo;

// cars is an array of car objects which look like
// this
// {
//   make: "Vauxhall",
//   model: "Astra",
//   year: 1992
// }
// increment the years by one year for all cars
function incrementYear(cars) {
  const addYear = cars.map(function(car) {
    const clonecar = { ...car };
    clonecar.year++;
    return clonecar;
  });
  // for (var i = 0; i < cars.length; i++) {
  //   cars[i].year++;

  return addYear;
}
exports.incrementYear = incrementYear;

// sales is an object where the key is
// the salespersons name and the value
// is an array containing that person's sales
// as integers. Calculate that each person's
// total sales.
// {
//   Mary: [57, 12, 31, 4],
//   Dave: [43, 2, 12]
// }
function totalSales(sales) {
  let returnObject = {};

  Object.keys(sales).forEach(function(key) {
    let total = sales[key].reduce(function(acc, salesTotal) {
      acc += salesTotal;
      return acc;
    }, 0);
    returnObject[key] = total;
  });
  return returnObject;
}
exports.totalSales = totalSales;

// stuff is an object with string keys and
// string values. All keys and values are unique
// Swap keys and values around, so that keys
// become values and values become keys.
// {
//   a: 'b',
//   c: 'd'
// }

function swapKeysAndValues(stuff) {
  let returnObject = {};
  Object.keys(stuff).forEach(function(key) {
    const value = stuff[key];
    returnObject[value] = key;
    delete stuff[key];
   });
  return returnObject;
}
exports.swapKeysAndValues = swapKeysAndValues;

// dates is an array of dates in string format
// 'yyyy-mm-dd' convert dates to date object.
// For example, '2018-02-12' is 12th Feb 2018

// Hint: this function has a bug that needs fixing
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

// function parseDates(dates){
//   var dateParts = dates.split('-');

//   for(var i = 0; i < dateParts.length; i++){
//     var year = parseInt(dateParts[0]);
//     var month = parseInt(dateParts[1]);
//     var day = parseInt(dateParts[2]);
//   }
  
//   myDate = new Date(year, month, day);


// return dates;
// }

function parseDates(dates){
  let myDate = new Date(dates);
  const prettyDate=(myDate.toDateString().substring(4,myDate.length));
  
  myDate = prettyDate.split(' ');
  
  const month = myDate[0];
  const day = parseInt(myDate[1]);
  const year = myDate[2];
  let suffix='';

  switch(day){
    case 1 :
    case 21 :
    case 31 :
      suffix='st';
      break;
    case 2 :
    case 22:
      suffix='nd';
      break;
    case 3:
      suffix='rd';
      break;
    default:
    suffix='th';
      break;
  }

  return `${day}${suffix} ${month} ${year}`;
}
exports.parseDates=parseDates;

// Stretch goal

// write a function stats it should accept 2 parameters
// 1. A prices array which contains and array of prices
// [8, 9, 10, 4]
// 2. An array of arrays where the inner array contains
// start and end indexes for which we want to calculate
// stats. The second index should always be greater or equal
// to first
// [ [0, 7], [1, 4], [3, 10] ]

// The function should output an array of objects which
// contain statistics calculated for each a set of prices
// as indicated by the corresponding array of indexes.

// [{
//   count: 10,
//   total: 57,
//   min: 4,
//   max: 9,
//   mean: "5.70" <- mean should be have 2 decimal places
//   variance: "3.63", <- variance should be have 2 decimal places
//   stdDeviation: "1.84" <- standard deviation should be have 2 decimal places
// }]

// Implement a solution using multiple pure functions

// Write a unit test for each function
