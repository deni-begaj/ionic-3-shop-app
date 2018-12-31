import { Component } from '@angular/core';
import { IonicPage, ActionSheetController } from 'ionic-angular';
import { DataService } from '../../data.service';

@IonicPage()
@Component({
	selector: 'page-product-details',
	templateUrl: 'product-details.html',
})
export class ProductDetailsPage {
	products = [];

	constructor(private dataService: DataService, public actionSheetCtrl: ActionSheetController) {
		this.products = this.dataService.products;
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad ProductDetailsPage');
	}

	openMenu() {
		console.log('openMenu');
		let actionSheet = this.actionSheetCtrl.create({
			title: 'Choose...',
			cssClass: 'action-sheets-basic-page',
			buttons: [
				{
					text: 'Add to cart',
					icon: 'ios-cart-outline',
					handler: () => {
						console.log('Add to cart clicked');
					}
				},
				{
					text: 'Add to wishlist',
					icon: 'ios-heart-outline',
					handler: () => {
						console.log('Add to wishlist clicked');
					}
				},
				{
					text: 'Share',
					icon: 'ios-share-outline',
					handler: () => {
						console.log('Favorite clicked');
					}
				},
				{
					text: 'Cancel',
					role: 'cancel', // will always sort to be on the bottom
					icon: 'ios-close-outline',
					handler: () => {
						console.log('Cancel clicked');
					}
				}
			]
		});
		actionSheet.present();
	}

}
