import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ProductDashboardComponent } from './component/product-dashboard/product-dashboard.component';
import { ProductFormComponent } from './component/product-dashboard/product-form/product-form.component';
import { ProductComponent } from './component/product-dashboard/product/product.component';
import { UsersDashboardComponent } from './component/users-dashboard/users-dashboard.component';
import { UserFormComponent } from './component/users-dashboard/user-form/user-form.component';
import { UserComponent } from './component/users-dashboard/user/user.component';
import { FairsDashboardComponent } from './component/fairs-dashboard/fairs-dashboard.component';
import { FairsDetailsComponent } from './component/fairs-dashboard/fairs-details/fairs-details.component';
import { AuthComponent } from './component/auth/auth.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },

  {
    path: 'users',
    component: UsersDashboardComponent,
    children: [
      {
        path: 'addusers',
        component: UserFormComponent
      },
      {
        path: ':uid',
        component: UserComponent
      },
      {
        path: ':uid/edit',
        component: UserFormComponent
      }
    ]
  },
  {
    path: 'product',
    component: ProductDashboardComponent,
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
    path: 'fairs',
    component: FairsDashboardComponent,
    children: [
      {
        path: ':id',
        component: FairsDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
