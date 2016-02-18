// TODO: map
function map(list, mapper) {
  return [];
}

function testMap() {
  var names:string[] = ["Bob", "Ed", "Kate"];
  var mapper:Function = function (name:string) {
    return "Hello, " + name;
  };
  var greetings:string[] = map(names, mapper);
  console.log("map:", greetings);
}

// TODO: filter
function filter(list, filteringAlgorithm) {
  return [];
}

function testFilter() {
  var names:string[] = ["Bob", "Ed", "Brian", "Ben", "Kate"];
  var startingWithB:Function = function (name) {
    return name[0].toUpperCase() === "B";
  };
  var namesStartingWithB:string[] = filter(names, startingWithB);
  console.log("filter:", namesStartingWithB);
}

// TODO: reduce
function reduce(list, iterator) {
}

// TODO: merge
function merge(destination, source) {
}

function testMerge() {
  // should return => {xxx: "qq", yyy: 2, zzz: 3}
  console.log("merge:", merge({xxx: 1, yyy: 2}, {xxx: "qq", zzz: 3}));
}

function testReduce() {
  var sumFn:Function = function (memo:any, item:any, index:number, list:any[]):any {
    return memo + item;
  };
  // should return => 14
  console.log("reduce 1:", reduce([2, 5, 7], sumFn));

  var mergeFn = function (memo:any, item:any, index:number, list:any[]):any {
    return merge(memo, item);
  };
  // should return => {name: "bob", age: 12, sex: "M"}
  console.log("reduce 2:", reduce([{name: "bob"}, {age: 12}, {sex: "M"}], mergeFn));
}

// TODO: all
function all(list, test) {
}

function testAll() {
// should return => false
  var greaterThanZero:Function = function (item:any, index:number):boolean {
    return item > 0;
  };
  console.log("all 1:", all([3, 5, -1, 9], greaterThanZero));

// should return => true
  var firstLetterIsB:Function = function (item:any, index:number):boolean {
    return item[0] === "B";
  };
  console.log("all 2:", all(["Bob", "Ben", "Beth"], firstLetterIsB));
}

// TODO: pluck
function pluck(list, propertyName) {
}

function testPluck() {
  var people:Object[] = [
    {name: "Bob", age: 12, sex: "M"},
    {name: "Kate", age: 22, sex: "F"},
    {name: "Ed", age: 34, sex: "M"}
  ];
  // should return => ["Bob", "Kate", "Ed"]
  console.log("pluck 1:", pluck(people, "name"));

  // should return => ["M", "F", "M"]
  console.log("pluck 2:", pluck(people, "sex"));
}

// TODO: groupBy
function groupBy(list, iterator) {
}

function testGroupBy() {
  var names:string[] = ["Bob", "Ed", "Kate", "Bo", "Ann", "Eve"];

  // should return => {2: ["Ed", "Bo"], 3: ["Bob", "Ann", "Eve"], 4: ["Kate"]}
  var byLength:Function = function (item:any):number {
    return item.length;
  };
  console.log("groupBy 1:", groupBy(names, byLength));

  // should return => {A: ["Ann"], B: ["Bob", "Bo"], E: ["Ed", "Eve"], K: ["Kate"]}
  var byFirstLetter:Function = function (item:any):string {
    return item[0];
  };
  console.log("groupBy 2:", groupBy(names, byFirstLetter));
}
