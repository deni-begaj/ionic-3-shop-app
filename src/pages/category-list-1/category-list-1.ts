import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { DataService } from '../../data.service';

@IonicPage()
@Component({
  selector: 'page-category',
  templateUrl: 'category-list-1.html',
})
export class CategoryList1Page {
  categories = [];

  constructor(private dataService: DataService) {
    this.categories = this.categories.concat(this.dataService.categories);
  }

}
