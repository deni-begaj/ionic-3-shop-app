import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Ls } from '../ls/ls';

@Injectable() 
export class Api {

    constructor(public http: Http, public ls: Ls){

    }

    private addHeaders() {
        let headers = new Headers();
        // headers.append('Authorization', 'Basic ' + btoa('username:password')); 
        headers.append('Content-Type', "application/json; charset=utf-8");         
        headers.append('x-access-token', this.ls.getUserToken()); 
        return headers;
    }

    private addContentType() {
        let headers = new Headers();
        headers.append('Content-Type', "application/json; charset=utf-8");
        return headers;
    }

    get(url){
        return this.http.get(url, { 
            headers: this.addHeaders() 
        }).map(res => res.json()).toPromise();
    }

    getAnonymous(url){
        return this.http.get(url, { 
            headers: this.addContentType() 
        }).map(res => res.json()).toPromise();
    }

    post(url, obj){
        return this.http.post(url, obj, { 
            headers: this.addHeaders() 
        }).map(res => res.json()).toPromise();
    }

    postAnonymous(url, obj){
        return this.http.post(url, obj, { 
            headers: this.addContentType() 
        }).map(res => res.json()).toPromise();
    }

    put(url, obj){
        return this.http.put(url, obj, { 
            headers: this.addHeaders() 
        }).map(res => res.json()).toPromise();
    }

    delete(url){
        return this.http.delete(url, { 
            headers: this.addHeaders() 
        }).map(res => res.json()).toPromise();
    }

}