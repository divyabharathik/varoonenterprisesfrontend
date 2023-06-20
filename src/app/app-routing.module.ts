import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { EnquiryDialogComponent } from './enquiry-dialog/enquiry-dialog.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'categories', component: CategoryListComponent },
  { path: 'categories/:category', component: ProductListComponent },
  { path: 'product/:productId', component:  ProductDetailComponent},
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: 'enq', component: EnquiryDialogComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
