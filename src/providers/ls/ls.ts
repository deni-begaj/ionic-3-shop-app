import { Injectable } from '@angular/core';

@Injectable()
export class Ls {

  ls = localStorage;

  set(key, val) :void {
    this.ls.setItem(key,val);
  }

  get(key) :string {
    return this.ls.getItem(key);
  }

  delete(key:string) :void {
    this.ls.removeItem(key);
  }

  setUser(obj:any) {
    this.set("email", obj.user.email);
    this.set("userId", obj.user.id);
    this.set("username", obj.user.username);
    this.set("firstname", obj.user.firstname);
    this.set("lastname", obj.user.lastname);
    this.set("fullname", obj.user.firstname + ' ' + obj.user.lastname);
    this.set("token", obj.token);
    this.set("profilePhoto", obj.user.profilePhoto);
    this.set("coverPhoto", obj.user.coverPhoto);
    this.set("countryId", obj.user.countryId);
    this.set("countryName", obj.user.countryName);
    this.set("socketToken", obj.socketToken);
    this.set("refreshToken", obj.refreshToken);
  } 

  getUser(){
    return {
      email: this.get("email"),
      id: this.get("userId"),
      username: this.get("username"),
      firstname: this.get("firstname"),
      lastname: this.get("lastname"),
      fullname: this.get("fullname"),
      profilePhoto: this.get("profilePhoto"),
      coverPhoto: this.get("coverPhoto"),
      countryId: this.get("countryId"),
      countryName: this.get("countryName")
    }
  }

  removeUser() {
    this.delete("email");
    this.delete("userId");
    this.delete("username");
    this.delete("firstname");
    this.delete("lastname");
    this.delete("fullname");
    this.delete("token");
    this.delete("profilePhoto");
    this.delete("coverPhoto");
    this.delete("countryId");
    this.delete("countryName");
    this.delete("socketToken");
    this.delete("refreshToken");
  }

  isLoggedIn() {
    return (this.get("userId") != null);
  }

  getUserId() {
    return this.get("userId");
  }
  
  getUserToken() {
    return this.get("token");
  }

}
