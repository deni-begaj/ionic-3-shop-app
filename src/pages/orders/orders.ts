import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-orders',
  templateUrl: 'orders.html',
})
export class OrdersPage {

  constructor() {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrdersPage');
  }

}
