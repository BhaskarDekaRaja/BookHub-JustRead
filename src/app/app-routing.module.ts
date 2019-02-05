import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CategoriesComponent } from './categories/categories.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { BooksComponent } from './categories/books/books.component';
import { UserAccountComponent } from './user-account/user-account.component';
import { AddressComponent } from './user-account/address/address.component';
import { DetailsComponent } from './user-account/details/details.component';
import { OrdersComponent } from './user-account/orders/orders.component';
import { FictionComponent } from './categories/fiction/fiction.component';
import { NonFictionComponent } from './categories/non-fiction/non-fiction.component';
import { LoveStoriesComponent } from './categories/love-stories/love-stories.component';
import { HealthBeautyComponent } from './categories/health-beauty/health-beauty.component';
import { HorrorComponent } from './categories/horror/horror.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'about-us',
    component: AboutUsComponent
  },
  {
    path:'contact-us',
    component: ContactUsComponent
  },
  {
    path:'categories',
    component: CategoriesComponent,
    children :[
      {
        path:'fiction',
        component: FictionComponent
      },
      {
        path:'nonFiction',
        component: NonFictionComponent
      },
      {
        path:'loveStories',
        component: LoveStoriesComponent
      },
      {
        path:'healthBeauty',
        component: HealthBeautyComponent
      },
      {
        path:'horror',
        component: HorrorComponent
      }
    ],
  },
  {
      path:'books',
      component: BooksComponent
  },
  {
    path:'sign-in',
    component: SignInComponent
  },
  {
    path:'sign-up',
    component: SignUpComponent
  },
  {
    path:'user-account',
    component: UserAccountComponent,
    children :[
      {
        path:'address-details',
        component:AddressComponent
      },
      {
        path:'account-details',
        component:DetailsComponent
      },
      {
        path:'order-details',
        component:OrdersComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
