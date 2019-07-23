import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllProductsComponent } from './all-products/all-products.component';
import { CommerceComponent } from './commerce/commerce.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';


const routes: Routes = [
  {
    path: 'products',
    component: CommerceComponent,
    children: [
      { path: '', component: AllProductsComponent},
      { path: 'new', component: CreateProductComponent },
      { path: ':id', component: ViewProductComponent},
      { path: ':id/edit', component: EditProductComponent }
    ]
  },
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
