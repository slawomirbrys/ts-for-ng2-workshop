import mySingleton from "./01_export_example";
import {square, MyPerson} from "./01_export_example";

mySingleton.hi();

console.log("square res", square(2));

var bob = new MyPerson("Bob");
console.log("person name", bob.getName());