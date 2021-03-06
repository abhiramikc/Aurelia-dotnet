import {HttpClient, json} from 'aurelia-fetch-client';
let httpClient = new HttpClient();
export class Testhttp
{
  email = '';
  password = '';

  signup() {
    var myUser = { email: this.email, password: this.password }
    console.log(myUser);
  };
}
