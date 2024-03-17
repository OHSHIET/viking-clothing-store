import { Injectable } from "@angular/core";
import { Review, ReviewsService } from './reviews.service';

enum type {
    Formal = 'Formalwear',
    Sport = 'Sportwear',
    Work = 'Workwear',
}

enum manufacturer {
    BestClothes = 'Best Clothes',
    AllSuit = 'AllSuit'
}

export interface Product {
    id: number,
    image: string,
    name: string,
    type: type,
    size: number,
    manufacturer: manufacturer,
    date: Date,
    price: number,
    reviews?: Review[],
}

@Injectable()
export class ProductsService {
    static products: Array<Product> = [
        {
            id: 0,
            image: 'https://media.istockphoto.com/id/460453103/photo/portrait-of-confident-mature-businessman-in-formals.jpg?s=612x612&w=0&k=20&c=JRj0qWfxZfCWlr3hioUxnj_fk9GHZLCPsQ38hou58C8=',
            name: 'clothes 1',
            type: type.Formal,
            size: 56,
            manufacturer: manufacturer.AllSuit,
            date: new Date(Date.now()),
            price: 450,
            reviews: ReviewsService.reviews.filter(review => review.product.id === 0)
        },
        {
            id: 1,
            name: 'clothing 2',
            image: 'https://armourheavy.com/cdn/shop/files/1_f1f315be-ce5d-4035-acc2-0e79599d05aa.jpg?v=1691661823&width=720',
            type: type.Sport,
            size: 80,
            manufacturer: manufacturer.AllSuit,
            date: new Date(Date.now()),
            price: 200,
            reviews: ReviewsService.reviews.filter(review => review.product.id === 1)
        },
        {
            id: 2,
            name: 'clothes 3',
            image: 'https://images.asos-media.com/products/asos-design-super-skinny-blazer-in-khaki-texture/203500945-1-khaki/?$n_480w$&wid=476&fit=constrain',
            type: type.Work,
            size: 58,
            manufacturer: manufacturer.BestClothes,
            date: new Date(Date.now()),
            price: 500,
            reviews: ReviewsService.reviews.filter(review => review.product.id === 2)
        },
        {
            id: 3,
            name: 'suit',
            image: 'https://atailoredsuit.com/wp-content/uploads/2014/12/13143595354_7716037504_o.jpg',
            type: type.Formal,
            size: 56,
            manufacturer: manufacturer.AllSuit,
            date: new Date(Date.now()),
            reviews: [],
            price: 1000,
        },
        {
            id: 4,
            name: 'sport clothes.',
            image: 'https://media.boohooman.com/i/boohooman/bmm74523_white_xl?$product_image_category_page$',
            type: type.Sport,
            size: 999,
            manufacturer: manufacturer.BestClothes,
            date: new Date(Date.now()),
            reviews: [],
            price: 250,
        },
        {
            id: 5,
            name: 'sport',
            image: 'https://images.lifestyleasia.com/wp-content/uploads/sites/3/2020/05/20220159/Screen-Shot-2563-05-20-at-6.59.10-PM.png',
            type: type.Sport,
            size: 56,
            manufacturer: manufacturer.BestClothes,
            date: new Date(Date.now()),
            price: 100,
            reviews: ReviewsService.reviews.filter(review => review.product.id === 5)
        },
        {
            id: 6,
            name: 'work clothing',
            image: 'https://i.ebayimg.com/images/g/AOcAAOSwqzFdi9uN/s-l400.jpg',
            type: type.Work,
            size: 60,
            manufacturer: manufacturer.AllSuit,
            date: new Date(Date.now()),
            price: 389,
            reviews: ReviewsService.reviews.filter(review => review.product.id === 6)
        },
        {
            id: 7,
            name: 'clothes 7',
            image: 'https://lanieri.com/blog/wp-content/uploads/2020/02/Abito-blu-testimone-Lanieri.jpg',
            type: type.Formal,
            size: 56,
            manufacturer: manufacturer.AllSuit,
            date: new Date(Date.now()),
            price: 450,
            reviews: []
        },
        {
            id: 8,
            name: 'sport clothing',
            image: 'https://i5.walmartimages.com/seo/BUYJYA-Men-s-Velour-Tracksuit-Set-Velvet-Sweatsuit-Jogging-Suits-Full-Zip-Casual-Jackets-Pants-2-piece-Warm-Outfit-Athletic-Workout_9f15e2dd-d815-4288-a51f-46261ded8ea0.0726a7c701c93904645fc18a3f45d45d.jpeg?odnHeight=432&odnWidth=320&odnBg=FFFFFF',
            type: type.Sport,
            size: 11,
            manufacturer: manufacturer.BestClothes,
            date: new Date(Date.now()),
            price: 11,
            reviews: ReviewsService.reviews.filter(review => review.product.id === 8)
        },
        {
            id: 9,
            name: 'exclusive',
            image: 'https://i.pinimg.com/474x/4b/59/22/4b5922d22a239def14b8c8fb0e997eb3.jpg',
            type: type.Formal,
            size: 9999,
            manufacturer: manufacturer.AllSuit,
            date: new Date(Date.now()),
            price: 99999,
            reviews: []
        },
    ]
}