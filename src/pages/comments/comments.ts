import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-comments',
  templateUrl: 'comments.html',
})
export class CommentsPage {

  constructor() {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommentsPage');
  }

}
