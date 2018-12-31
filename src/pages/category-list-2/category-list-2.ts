import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { DataService } from '../../data.service';

@IonicPage()
@Component({
  selector: 'page-category-list',
  templateUrl: 'category-list-2.html',
})
export class CategoryList2Page {
  categories = [];

  constructor(private dataService: DataService) {
    this.categories = this.categories.concat(this.dataService.categories);
  }

}
