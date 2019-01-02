import { Component } from '@angular/core';
import { IonicPage, NavController, Events } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

import { Auth } from '../../providers/auth/auth';
import { Ls } from '../../providers/ls/ls';

import { HomePage } from '../home/home';

@IonicPage()
@Component({
	selector: 'page-login',
	templateUrl: 'login.html',
})
export class LoginPage {

	username: string;
	password: string;

	constructor(private auth: Auth, private toastCtrl: ToastController, private nav: NavController, private ls:Ls, private events: Events) {

	}

	presentToast(str :string, isSuccess: boolean) {
		const toast = this.toastCtrl.create({
			position: 'bottom',
			message: str,
			duration: 3000,
			dismissOnPageChange: true,
			cssClass: isSuccess ? "toast-success" : "toast-danger"
		});
		toast.present();
	}

	login(){
		if(!this.username || this.username == "") {
			this.presentToast("Empty username!", false);
			return;
		}
		if(!this.password || this.password == ""){
			this.presentToast("Empty password!", false);
			return;			
		}
		this.auth.login({ email: this.username, password: this.password, clientType: 1 })
			.then(data => {
				if(data.success){
					this.presentToast(data.message, true);
					this.events.publish('user:loggedIn', this.ls.getUser());
					this.goTo(HomePage);
				} else {
					this.presentToast(data.message, false);
				}
			})
			.catch(ex=> {
				this.presentToast(ex.message, false);
			});
	}

	goTo(Component) {
		this.nav.push(Component);
	}

}
