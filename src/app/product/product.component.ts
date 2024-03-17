import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
  productId?: string | null;
  product!: any;
  loggedIn: boolean = false;
  removeItem: boolean = false;
  userid?: string | null = '';

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('id');

    this.product = ProductsService.products.find(product => product.id === Number(this.productId));

    this.loggedIn = localStorage.getItem('isLoggedIn') === 'true';

    this.userid = localStorage?.getItem('userId');

    if(this.loggedIn && this.userid){

      const params = new HttpParams()
      .set('id', this.userid)

      this.http.get<any>(`http://localhost:3000/getuser`, {params})
      .subscribe(response => {
        for(let item of response.user.cart){
          if (item.id.toString() === this.productId){
            this.removeItem = true;
          }
        }
      })
    }
  }

  addToCart(): void {
    
    this.http.post<any>(`http://localhost:3000/addtocart`, {id: this.productId, user: this.userid})
      .subscribe(response => {
        
        console.log('added to cart', response);
      }, error => {
        
        console.error('Error', error);
      });
  }

  removeFromCart(): void {
    this.http.post<any>(`http://localhost:3000/removecart`, {itemId: this.productId, userId: this.userid})
      .subscribe(response => {
        
        console.log('removed from cart', response);
        window.location.reload();
      }, error => {
        
        console.error('Error', error);
      });
  }
  }
