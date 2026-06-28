import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { UsersComponent } from './component/users/users.component';
import { ProductDashboardComponent } from './component/product-dashboard/product-dashboard.component';
import { ProductFormComponent } from './component/product-dashboard/product-form/product-form.component';
import { ProductComponent } from './component/product-dashboard/product/product.component';
import { FairsComponent } from './component/fairs/fairs.component';

const routes: Routes = [
{
  path:'home',
  component:HomeComponent
},
{ 
  path:'',
  redirectTo:'home',
  pathMatch:'full'
},
{
  path:'users',
  component:UsersComponent
},
{
  path:'product',
  component:ProductDashboardComponent,
  children: [
    {
      path: 'addproduct',
      component: ProductFormComponent
    },
    {
      path: ':pid',
      component: ProductComponent
    },
    {
      path: ':pid/edit',
      component: ProductFormComponent
    },
  ]
},
{
  path:'fairs',
  component:FairsComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
