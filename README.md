# Viking clothing store
Very simple online clothing store made with Angular and TypeScript on frontend, and Express with MongoDB on backend.

I tried to keep everything simple and straight to the point since I didn't have much time designing the app: it was made as a final project for Web Programming class at Singidunum University.

![Store design](https://i.imgur.com/aiJYwSP.png)
#### Video demo: [link](https://youtu.be/08o0JajaN30)

## Features
When the user has signed up or logged in, the site redirects them to their page, where they can edit their info. Backend only edits info that user has inputted into the input boxes and skips over the empty ones.

The similarity between the static users (see `Files` section) and users which are generated dynamically in a database is that they both use same `user/<id>` page, however for dynamic users the IDs are generated automatically by MongoDB, while for static users I wrote their IDs iteratively by myself: `0`, `1`, `2`, `3`...

The static user page includes their reviews and favorite items, which are hardcoded in the service files (see `Files` section), because this was required by project's specifications.

The product page has users' reviews, picture, basic info, and possibility of adding item to cart or removing it from there if user is logged in.

The cart page includes searching through added items, removing items from cart, and also automatically calculates total price for all the items in the cart.

The search page allows users to search through all the static products either by their name, manufacturer or type.

## Files
`src/app` - `<front>` (all frontend implementation)

* `backend/*` - all the backend implementation
* `<front>/app.component.*` - template for other pages (mainly the sidebar)
* `<front>/products.service.ts`, `<front>/reviews.service.ts` - static products and reviews
* `<front>/_service` - compiled TS-to-JS files of products and reviews, so I could use them on backend
* `<front>/auth/users.service.ts` - static users
* `<front>/auth/auth.service.ts` - handles logging in and signing up requests and responses
* `<front>/<any other folder>` - pages implemented on the website