import { Component } from '@angular/core';
import { DataService } from '../../data.service';
import { Auth } from '../../providers/auth/auth';
import { Ls } from '../../providers/ls/ls';
import { Nav} from 'ionic-angular';

import { LoginPage } from '../../pages/login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  products = [];

  constructor(private dataService: DataService, private auth: Auth, private ls: Ls, private nav: Nav) {
    // this.products = this.products.concat(this.dataService.products);
    // this.products = this.products.concat(this.dataService.products);
    if(!this.ls.isLoggedIn()) { 
      this.goTo(LoginPage);
    }
  }

  goTo(Component) {
    this.nav.push(Component);
  }

} 