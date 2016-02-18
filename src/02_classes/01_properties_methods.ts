class Monkey {
  name:string; // default: public
  public age:number;

  constructor(name:string, age:number = 12) {
    this.name = name;
    this.age = age;
  }

  getName():string {
    return this.name;
  }

  setAge(age:number) {
    this.age = age;
  }
}

var coco:Monkey = new Monkey("Coco", 3);
coco.getName();
coco.name;

