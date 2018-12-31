import { Injectable } from "@angular/core";

@Injectable()
export class DataService {
    public products = [
        {
            name: 'Jacket',
            image: 'assets/img/jacket1.png',
            price: 20,
            discountPrice: 10,
        },
        {
            name: 'Bag Pack',
            image: 'assets/img/bagpack1.png',
            price: 100,
            discountPrice: 100,
        },
        {
            name: 'Blue Shirt',
            image: 'assets/img/shirt1.png',
            price: 40,
            discountPrice: 30,
        },
        {
            name: 'Green Shirt',
            image: 'assets/img/shirt2.png',
            price: 20,
            discountPrice: 10,
        },
        {
            name: 'Jacket',
            image: 'assets/img/jacket2.png',
            price: 20,
            discountPrice: 10,
        },
        {
            name: 'Shoes',
            image: 'assets/img/shoes1.png',
            price: 20,
            discountPrice: 10,
        },
    ];

    public categories = [
        {
            name: 'Jacket',
            image: 'assets/img/jacket1.png',
            count: 20,
        },
        {
            name: 'Bag Pack',
            image: 'assets/img/bagpack1.png',
            count: 34,
        },
        {
            name: 'Shirt',
            image: 'assets/img/shirt1.png',
            count: 74,
        },
        {
            name: 'Shoes',
            image: 'assets/img/shoes1.png',
            count: 19,
        },
    ];
}