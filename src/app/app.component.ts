import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { CartPage } from '../pages/cart/cart';
import { DeliveryPage } from '../pages/delivery/delivery';
import { ProductDetailsPage } from '../pages/product-details/product-details';
import { CardPage } from '../pages/card/card';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { CategoryList1Page } from '../pages/category-list-1/category-list-1';
import { OrdersPage } from '../pages/orders/orders';
import { ForgotPasswordPage } from '../pages/forgot-password/forgot-password';
import { ResetPasswordPage } from '../pages/reset-password/reset-password';
import { WishlistPage } from '../pages/wishlist/wishlist';
import { CommentsPage } from '../pages/comments/comments';
import { DataService } from '../data.service';
import { CategoryList2Page } from '../pages/category-list-2/category-list-2';
import { ProductListPage } from '../pages/product-list/product-list';
import { SearchPage } from '../pages/search/search';

import { Ls } from '../providers/ls/ls';


@Component({
	templateUrl: 'app.html',
	providers: [DataService]
})
export class MyApp {
	@ViewChild(Nav) nav: Nav;

	rootPage: any = HomePage;
	pages: Array<{ title: string, component: any, icon: string }>;
	user: any = null;

	constructor(public platform: Platform, 
				public statusBar: StatusBar, 
				public splashScreen: SplashScreen, 
				public ls:Ls, 
				public events: Events
	) {
		this.initializeApp();

		// used for an example of ngFor and navigation
		this.pages = [
			{ title: 'Home', component: HomePage, icon: 'ios-home-outline' },
			// { title: 'Search', component: SearchPage, icon: 'ios-search-outline' },
			{ title: 'Product List View', component: ProductListPage, icon: 'ios-list-outline' },
			{ title: 'Product Details', component: ProductDetailsPage, icon: 'ios-create-outline' },
			{ title: 'Categories Grid View', component: CategoryList1Page, icon: 'ios-grid-outline' },
			{ title: 'Categories List View', component: CategoryList2Page, icon: 'ios-list-outline' },
			{ title: 'Cart', component: CartPage, icon: 'ios-cart-outline' },
			{ title: 'Wishlist', component: WishlistPage, icon: 'ios-heart-outline' },
			{ title: 'Card', component: CardPage, icon: 'ios-card-outline' },
			{ title: 'Delivery', component: DeliveryPage, icon: 'ios-cube-outline' },
			{ title: 'Orders', component: OrdersPage, icon: 'ios-pizza-outline' },
			{ title: 'Comments', component: CommentsPage, icon: 'ios-chatbubbles-outline' },
			// { title: 'Login', component: LoginPage, icon: 'ios-log-in-outline' },
			// { title: 'Signup', component: SignupPage, icon: 'ios-person-add-outline' },
			// { title: 'Forgot Password', component: ForgotPasswordPage, icon: 'ios-key-outline' },
			// { title: 'Reset Password', component: ResetPasswordPage, icon: 'ios-refresh-outline' },
		];

		if(this.ls.isLoggedIn()) {
			debugger;
			this.user = this.ls.getUser();
		} else {
			this.user = null;
		}

		this.events.subscribe('user:loggedIn', (user) => {
			this.user = user;
		});

	}

	initializeApp() {
		this.platform.ready().then(() => {
			// Okay, so the platform is ready and our plugins are available.
			// Here you can do any higher level native things you might need.
			this.statusBar.styleDefault();
			this.splashScreen.hide();
		});
	}

	openPage(page) {
		// Reset the content nav to have just this page
		// we wouldn't want the back button to show in this scenario
		this.nav.push(page.component);
		// this.nav.setRoot(page.component);
	}
}
