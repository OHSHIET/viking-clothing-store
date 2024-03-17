import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainpageComponent } from './mainpage/mainpage.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { ProductComponent } from './product/product.component';
import { UserComponent } from './user/user.component';
import { CartComponent } from './cart/cart.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: '', component: MainpageComponent },
  { path: 'cart', component: CartComponent},
  { path: 'auth/signup', component: SignupComponent},
  { path: 'auth/login', component: LoginComponent },
  { path: 'catalogue', component: CatalogueComponent },
  { path: 'search', component: SearchComponent },
  { path: 'product/:id', component: ProductComponent },
  { path: 'user/:id', component: UserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
