const functions = require("../src/index");

test("multiplier", function() {
  const expected = [2, 4, 6];
  const numbers = [1, 2, 3];
  const result = functions.multiply(numbers, 2);
  expect(result).toEqual(expected);
  expect(numbers).toEqual([1, 2, 3]);
});

test("make absolute", function() {
  const expected = [1, 2, 3, 4, 5];
  const numbers = [-1, 2, -3, 4, -5];
  const result = functions.absolute([-1, 2, -3, 4, -5]);
  expect(result).toEqual(expected);
  expect(numbers).toEqual([-1, 2, -3, 4, -5]);
});

test("concatNamestest", function() {
  const expected = ["Mickey Mouse"];
  const originalName = [{ firstName: "Mickey", lastName: "Mouse" }];
  const result = functions.concatNames([
    { firstName: "Mickey", lastName: "Mouse" }
  ]);
  expect(result).toEqual(expected);
  expect(originalName).toEqual([{ firstName: "Mickey", lastName: "Mouse" }]);
});

test("numbers to strings", function() {
  const expected = ["Mocha", "5", "Santos", "2", "2"];
  const originalArray = ["Mocha", 5, "Santos", 2, "2"];
  const result = functions.numbersToStrings(["Mocha", 5, "Santos", 2, "2"]);
  expect(result).toEqual(expected);
  expect(originalArray).toEqual(["Mocha", 5, "Santos", 2, "2"]);
});

test("sortbylengthtest", function() {
  const expected = ["a", "bb", "aaa", "Sheila"];
  const originalArray = ["a", "aaa", "bb", "Sheila"];
  const result = functions.sortByLength(["a", "aaa", "bb", "Sheila"]);
  expect(result).toEqual(expected);
  expect(originalArray).toEqual(["a", "aaa", "bb", "Sheila"]);
});

test("Last Two Numbers", function() {
  const expected = [8, 9];
  const originalArray = [4, 5, 6, 7, 8, 9];
  const result = functions.lastTwo([4, 5, 6, 7, 8, 9]);
  expect(result).toEqual(expected);
  expect(originalArray).toEqual([4, 5, 6, 7, 8, 9]);
});

test("plusYears", function() {
  const expected = [{ make: "Citroen", model: "aircross", year: 2018 }];
  const originalArray = [{ make: "Citroen", model: "aircross", year: 2017 }];
  const result = functions.incrementYear([
    {
      make: "Citroen",
      model: "aircross",
      year: 2017
    }
  ]);
  expect(result).toEqual(expected);
  expect(originalArray).toEqual([
    { make: "Citroen", model: "aircross", year: 2017 }
  ]);
});

test("Total Sales by Name", function() {
  const expected = { Mary: 104, Dave: 57 };
  const originalArray = { Mary: [57, 12, 31, 4], Dave: [43, 2, 12] };
  const result = functions.totalSales({
    Mary: [57, 12, 31, 4],
    Dave: [43, 2, 12]
  });
  expect(result).toEqual(expected);
  expect(originalArray).toEqual({ Mary: [57, 12, 31, 4], Dave: [43, 2, 12] });
});


test("Swap keys and values", function() {
  const expected = {b:'a',d:'c' };
  const originalArray = {a:'b',c:'d'};
  const result = functions.swapKeysAndValues({a:'b',c:'d'});
  expect(result).toEqual(expected);
  expect(originalArray).toEqual({a:'b',c:'d'})});

  
test("Format Date", function() {
  const expected = '12th Feb 2018';
  const originalArray = '2018-02-12';
  const result = functions.parseDates('2018-12-03');
  expect(result).toEqual(expected);
  expect(originalArray).toEqual('2018-02-12')});

