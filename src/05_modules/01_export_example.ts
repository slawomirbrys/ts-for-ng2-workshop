const MY_CONST = "imba!";

export function square(number):number {
  return number * number;
}

export class MyPerson {
  constructor(private _name:string) {
  }

  getName():string {
    return this._name;
  }
}


var mySingleton = {
  hi: function () {
    console.log("hi");
  }
};


export default mySingleton;
