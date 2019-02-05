import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CategoriesComponent } from './categories/categories.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { BooksComponent } from './categories/books/books.component';
import { ArticlesComponent } from './categories/articles/articles.component';
import { EBooksComponent } from './categories/e-books/e-books.component';
import { UserAccountComponent } from './user-account/user-account.component';
import { DetailsComponent } from './user-account/details/details.component';
import { AddressComponent } from './user-account/address/address.component';
import { OrdersComponent } from './user-account/orders/orders.component';
import { FictionComponent } from './categories/fiction/fiction.component';
import { NonFictionComponent } from './categories/non-fiction/non-fiction.component';
import { LoveStoriesComponent } from './categories/love-stories/love-stories.component';
import { HealthBeautyComponent } from './categories/health-beauty/health-beauty.component';
import { HorrorComponent } from './categories/horror/horror.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    CategoriesComponent,
    ContactUsComponent,
    SignUpComponent,
    SignInComponent,
    BooksComponent,
    ArticlesComponent,
    EBooksComponent,
    UserAccountComponent,
    DetailsComponent,
    AddressComponent,
    OrdersComponent,
    FictionComponent,
    NonFictionComponent,
    LoveStoriesComponent,
    HealthBeautyComponent,
    HorrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
