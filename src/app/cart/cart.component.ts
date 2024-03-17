import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Product } from '../products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  cart: Product[] = []; // all user's cart
  cartFiltered: Product[] = []; // cart when user searches
  loggedIn = true;
  price: number = 0;
  searchString: string = '';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    const userId = localStorage.getItem('userId')

    if (!userId){
      this.loggedIn = false;
    }

    else {
      let params = new HttpParams()
      .set('user', userId)
    
    this.http.get<any>(`http://localhost:3000/getcart`, {params})
    .subscribe(response => {
      this.cart = response.cart;
      for(let item of this.cart){
        this.price += item.price;
      }
    })
    }
  }

  removeItem(id: any): void{

    let query = {itemId: id, userId: localStorage.getItem('userId')}

    this.http.post<any>(`http://localhost:3000/removecart`, query)
    .subscribe(response => {
      console.log(response)
      window.location.reload();
    })
  }

  filterCart() {
    this.cartFiltered = this.cart.filter(item =>
      item.name.toLowerCase().includes(this.searchString.toLowerCase())
    );
  }
}
