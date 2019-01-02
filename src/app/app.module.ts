import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CartPage } from '../pages/cart/cart';
import { DeliveryPage } from '../pages/delivery/delivery';
import { ProductDetailsPage } from '../pages/product-details/product-details';
import { SignupPage } from '../pages/signup/signup';
import { LoginPage } from '../pages/login/login';
import { CardPage } from '../pages/card/card';
import { CategoryList1Page } from '../pages/category-list-1/category-list-1';
import { OrdersPage } from '../pages/orders/orders';
import { ResetPasswordPage } from '../pages/reset-password/reset-password';
import { ForgotPasswordPage } from '../pages/forgot-password/forgot-password';
import { WishlistPage } from '../pages/wishlist/wishlist';
import { CommentsPage } from '../pages/comments/comments';
import { ProductListPage } from '../pages/product-list/product-list';
import { CategoryList2Page } from '../pages/category-list-2/category-list-2';
import { SearchPage } from '../pages/search/search';
import { Ls } from '../providers/ls/ls';
import { Auth } from '../providers/auth/auth';
import { Api } from '../providers/api/api';

@NgModule({
	declarations: [
		MyApp,
		HomePage,
		SearchPage,
		CartPage,
		DeliveryPage,
		ProductDetailsPage,
		SignupPage,
		LoginPage,
		CardPage,
		CategoryList1Page,
		OrdersPage,
		ResetPasswordPage,
		ForgotPasswordPage,
		WishlistPage,
		CommentsPage,
		ProductListPage,
		CategoryList2Page
	],
	imports: [
		BrowserModule,
		HttpModule,
		IonicModule.forRoot(MyApp, { mode: 'md' }, {
			links: [
				{ component: HomePage, name: 'home-page' },
				{ component: SearchPage, name: 'search-page' },
				{ component: CategoryList1Page, name: 'categories-list1-page' },
				{ component: CategoryList2Page, name: 'categories-list2-page' },
				{ component: ProductDetailsPage, name: 'product-details-page' },
				{ component: CartPage, name: 'cart-page' },
				{ component: WishlistPage, name: 'wishlist-page' },
				{ component: CardPage, name: 'card-page' },
				{ component: DeliveryPage, name: 'delivery-page' },
				{ component: OrdersPage, name: 'orders-page' },
				{ component: CommentsPage, name: 'comments-page' },
				{ component: LoginPage, name: 'login-page' },
				{ component: SignupPage, name: 'signup-page' },
				{ component: ResetPasswordPage, name: 'reset-password-page' },
				{ component: ForgotPasswordPage, name: 'forgot-password-page' },
				{ component: ProductListPage, name: 'product-list-page' },
			]
		}),
	],
	bootstrap: [IonicApp],
	entryComponents: [
		MyApp,
		HomePage,
		SearchPage,
		CartPage,
		DeliveryPage,
		ProductDetailsPage,
		SignupPage,
		LoginPage,
		CardPage,
		CategoryList1Page,
		OrdersPage,
		ResetPasswordPage,
		ForgotPasswordPage,
		WishlistPage,
		CommentsPage,
		ProductListPage,
		CategoryList2Page
	],
	providers: [
		StatusBar,
		SplashScreen,
		{ provide: ErrorHandler, useClass: IonicErrorHandler },
		Ls,
		Auth,
		Api
	]
})
export class AppModule { }
