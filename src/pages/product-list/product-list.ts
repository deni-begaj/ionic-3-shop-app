import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { DataService } from '../../data.service';

@IonicPage()
@Component({
	selector: 'page-product-list',
	templateUrl: 'product-list.html',
})
export class ProductListPage {
	products = [];

	constructor(private dataSerice: DataService) {
	  this.products = this.products.concat(this.dataSerice.products);
	  this.products = this.products.concat(this.dataSerice.products);
	}

}
