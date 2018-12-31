import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { DataService } from '../../data.service';

@IonicPage()
@Component({
  selector: 'page-wishlist',
  templateUrl: 'wishlist.html',
})
export class WishlistPage {
  products = [];

  constructor(private dataService: DataService) {
    this.products = this.dataService.products;
  }

}
