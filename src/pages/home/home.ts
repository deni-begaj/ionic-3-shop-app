import { Component } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  products = [];

  constructor(private dataService: DataService) {
    this.products = this.products.concat(this.dataService.products);
    this.products = this.products.concat(this.dataService.products);
  }

}
