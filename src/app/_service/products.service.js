"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
//Object.defineProperty(exports, { value: true });
//exports.ProductsService = void 0;
/* var core_1 = require("@angular/core");
var reviews_service_1 = require("./reviews.service"); */
//import {core as core_1} from '@angular/core';
import { Injectable } from '@angular/core';
import {ReviewsService} from './reviews.service.js';
var type;
(function (type) {
    type["Formal"] = "Formalwear";
    type["Sport"] = "Sportwear";
    type["Work"] = "Workwear";
})(type || (type = {}));
var manufacturer;
(function (manufacturer) {
    manufacturer["BestClothes"] = "Best Clothes";
    manufacturer["AllSuit"] = "AllSuit";
})(manufacturer || (manufacturer = {}));
var ProductsService = function () {
    var _classDecorators = [(0, Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var ProductsService = _classThis = /** @class */ (function () {
        function ProductsService_1() {
        }
        return ProductsService_1;
    }());
    __setFunctionName(_classThis, "ProductsService");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        ProductsService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
    })();
    _classThis.products = [
        {
            id: 0,
            image: 'https://media.istockphoto.com/id/460453103/photo/portrait-of-confident-mature-businessman-in-formals.jpg?s=612x612&w=0&k=20&c=JRj0qWfxZfCWlr3hioUxnj_fk9GHZLCPsQ38hou58C8=',
            name: 'clothes 1',
            type: type.Formal,
            size: 56,
            manufacturer: manufacturer.AllSuit,
            date: new Date(Date.now()),
            price: 450,
            reviews: ReviewsService.reviews.filter(function (review) { return review.product.id === 0; })
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
            reviews: ReviewsService.reviews.filter(function (review) { return review.product.id === 1; })
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
            reviews: ReviewsService.reviews.filter(function (review) { return review.product.id === 2; })
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
            reviews: ReviewsService.reviews.filter(function (review) { return review.product.id === 5; })
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
            reviews: ReviewsService.reviews.filter(function (review) { return review.product.id === 6; })
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
            reviews: ReviewsService.reviews.filter(function (review) { return review.product.id === 8; })
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
    ];
    (function () {
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ProductsService = _classThis;
}();
export var ProductsService = ProductsService;
