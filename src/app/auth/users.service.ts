import { Injectable } from "@angular/core";
import { Review, ReviewsService } from '../reviews.service';

interface ProductSubset {
    id: number,
    name: string,
}
export interface User {
    id: number,
    name: string,
    surname?: string,
    email: string,
    phone?: string,
    address?: string,
    favorite?: ProductSubset[],
    reviews?: Review[],
}

@Injectable()
export class UsersService {
    static users: Array<User> = [
        {
            id: 0,
            name: 'john',
            surname: 'doe',
            email: 'johndoe@gmail.com',
            phone: '+38162879012',
            address: 'Beograd',
            favorite: [
                {
                    id: 0,
                    name: 'clothes 1',
                }
            ],
            reviews: ReviewsService.reviews.filter(review => review.user.id === 0)
        },
        {
            id: 1,
            name: 'user',
            surname: 'user',
            email: 'user@gmail.com',
            favorite: [
                {
                    id: 3,
                    name: 'suit',
                },
                {
                    id: 5,
                    name: 'sport',
                },
                {
                    id: 1,
                    name: 'clothing 2',
                },
            ],
            reviews: ReviewsService.reviews.filter(review => review.user.id === 1)
        },
        {
            id: 2,
            name: 'joe',
            email: 'joe@gmail.com',
            reviews: ReviewsService.reviews.filter(review => review.user.id === 2)
        },
        {
            id: 3,
            name: '???',
            email: 'qq@gmail.com',
        },
        {
            id: 4,
            name: '!!!!',
            email: 'jjj@gmail.com',
            favorite: [
                {
                    id: 6,
                    name: 'work clothing'
                }
            ],
            reviews: ReviewsService.reviews.filter(review => review.user.id === 4)
        },
    ]

}