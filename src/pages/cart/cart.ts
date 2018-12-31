import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { DataService } from '../../data.service';

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {
  products = [];

  constructor(private dataService: DataService) {
    this.products = this.dataService.products;
  }


}
