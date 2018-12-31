import { Component } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {
  products = [];

  constructor(private dataSerice: DataService) {
    this.products = this.products.concat(this.dataSerice.products);
  }

}
