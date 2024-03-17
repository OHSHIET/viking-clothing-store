"use strict";
//Object.defineProperty(exports, "__esModule", { value: true });
//exports.ReviewsService = void 0;
var ReviewsService = /** @class */ (function () {
    function ReviewsService() {
    }
    ReviewsService.reviews = [
        {
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
        {
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
        {
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
        {
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
        {
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
        {
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
        {
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
        {
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
    ];
    return ReviewsService;
}());
export var ReviewsService = ReviewsService;
