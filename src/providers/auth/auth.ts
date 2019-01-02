import { Injectable } from '@angular/core';
import { Api } from '../api/api';
import { Ls } from '../ls/ls';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class Auth {

  rootUrl = 'http://18.224.51.217:3000';
  loginUrl = this.rootUrl + '/auth/login';
  registerUrl = this.rootUrl + '/auth/register';
  logoutUrl = this.rootUrl + '/auth/logout';  

  constructor(public api: Api, public ls: Ls) {
    console.log('Hello AuthProvider Provider');
  }

  login(obj) {
    return this.api.postAnonymous(this.loginUrl, obj)
      .then(data=>{
        console.log("Login succesful! " + data);
        this.ls.setUser(data);
        return { success: true, message: "Login succesful!" };
      })
      .catch(ex => {
        let res = JSON.parse(ex._body);
        console.log("Error on Auth.login: " + res.message.message);
        return { success: false, message: res.message.message };
      })
  }

}
