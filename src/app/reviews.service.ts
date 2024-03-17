import { Injectable } from "@angular/core";

interface Subset {
    id: number,
    name: string,
}

export interface Review {
    review_text: string,
    user: Subset,
    product: Subset,
}

export class ReviewsService {
    static reviews: Array<Review> = [
        { // 0
            review_text: "i really liked this",
            user: {
                id: 0,
                name: 'john'
            },
            product: {
                id: 0,
                name: 'clothes 1'
            }
        },
        { // 1
            review_text: "this is the worst thing to ever exist",
            user: {
                id: 2,
                name: 'joe'
            },
            product: {
                id: 1,
                name: 'clothing 2'
            }
        },
        { // 2
            review_text: "good price for good quality",
            user: {
                id: 1,
                name: 'user'
            },
            product: {
                id: 2,
                name: 'clothes 3'
            }
        },
        { // 3
            review_text: "great",
            user: {
                id: 4,
                name: '!!!!'
            },
            product: {
                id: 2,
                name: 'clothes 3'
            }
        },
        { // 4
            review_text: "too expensive for this material",
            user: {
                id: 1,
                name: 'user'
            },
            product: {
                id: 5,
                name: 'sport'
            }
        },
        { // 5
            review_text: "good for work",
            user: {
                id: 4,
                name: '!!!!'
            },
            product: {
                id: 6,
                name: 'work clothing'
            }
        },
        { // 6
            review_text: "not for me",
            user: {
                id: 1,
                name: 'user'
            },
            product: {
                id: 6,
                name: 'work clothing'
            }
        },
        { // 7
            review_text: "nice sports clothes",
            user: {
                id: 1,
                name: 'user'
            },
            product: {
                id: 8,
                name: 'sport clothing'
            }
        },
    ]
}