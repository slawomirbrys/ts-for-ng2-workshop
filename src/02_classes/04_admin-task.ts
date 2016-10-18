//TODO 1: AdminParams interface


/*
 * TODO 2: new Admin(params) class:
 * Public properties:
 * + uuid (generated using private static property NEXT_UUID)
 * Private properties:
 * - login
 * - password
 * Public methods:
 * + getLogin()
 * + setLogin(value)
 * + getEncodedPassword()
 * Private methods:
 * - encodePassword() (encoded using private static property ENCODING_STR)
 * Private static properties:
 * - NEXT_UUID
 * - ENCODING_STR
 * Private static methods:
 * - generateUuid() (generates next uniq UUID)
 * */

class Admin {

  constructor(private params:AdminParams){

  }

  public uuid:number = 0;
  getLogin() : string {
    return this.params.login;
  }

  setLogin(login:string){
    this.params.login = login;
  }

  getEncodedPassword() : string{
    return this.params.password + "imba!";
  }
}

class AdminParams {
  constructor(public login:string, public password:string){}
}

function adminTest() {
  var login:string = "Bob";
  var passwd:string = "#secret!";

  // TODO: uncomment

  var params : AdminParams = {
    login: login,
    password: passwd
  };
  var admin:Admin = new Admin(params);

  console.assert(admin.uuid == 0, "uuid should eq 0");
  console.assert(admin.getLogin() == login, "getLogin() should eq login");
  login = "kate";
  admin.setLogin(login);
  console.assert(admin.getLogin() == login, "setLogin() should change login");
  console.assert(admin.getEncodedPassword() == passwd + "imba!", "getEncodedPassword() should encode password");
  console.log("adminTest passed");

}

adminTest();
