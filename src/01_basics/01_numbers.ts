var age:number = 12;


var cities:string[] = ["Krakow"];

var isOk:boolean = true;

var bob:Object = {name: "bobek"};

var something:any;
something = 123;
something = "qq";
something = [];

var nothing:void;

var fn:Function = function () {};

function toStr(age:number, name:string, ...otherArgs:number[]):string {
  console.log("arguments", arguments, "other", otherArgs);

  return "qq";
}


toStr(12, "b");
toStr(12, "q", 997, -88.8);
toStr(12, "aaa", 1, 2, 3, 4, 5);
