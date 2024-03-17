import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { LoginComponent } from './auth/login/login.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { ProductsService } from './products.service';
import { UsersService } from './auth/users.service';
import { ReviewsService } from './reviews.service';
import { ProductComponent } from './product/product.component';
import { UserComponent } from './user/user.component';
import { SearchComponent } from './search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    MainpageComponent,
    LoginComponent,
    CatalogueComponent,
    ProductComponent,
    UserComponent,
    SearchComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [
    ProductsService, UsersService, ReviewsService, provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
