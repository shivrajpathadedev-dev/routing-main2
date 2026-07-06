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
import { PathNotFoundComponent } from './component/path-not-found/path-not-found.component';
import { AuthGuard } from './services/auth.guard';
import { userRoleGuard } from './services/userRole.guard';
import { CanDeactivateGuard } from './services/can-deactivate.guard';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate:[AuthGuard,userRoleGuard],
    title: 'Home',
     data: {
      userRole: ['buyer', 'Admin', 'superAdmin']
    }
  },

  {
    path: 'users',
    component: UsersDashboardComponent,
    canActivate:[AuthGuard,userRoleGuard],
     data: {
      userRole: ['Admin', 'superAdmin']
    },
    title: 'Users',
    children: [
      {
        path: 'addusers',
        component: UserFormComponent,
    canDeactivate:[CanDeactivateGuard]
      },
      {
        path: ':uid',
        component: UserComponent
      },
      {
        path: ':uid/edit',
        component: UserFormComponent,
    canDeactivate:[CanDeactivateGuard]
      }
    ]
  },
  {
    path: 'product',
    component: ProductDashboardComponent,
    canActivate:[AuthGuard,userRoleGuard],
     data: {
      userRole: ['buyer', 'Admin', 'superAdmin']
    },
    title: 'Products',
    children: [
      {
        path: 'addproduct',
    canDeactivate:[CanDeactivateGuard],
        component: ProductFormComponent
      },
      {
        path: ':pid',
        component: ProductComponent
      },
      {
        path: ':pid/edit',
    canDeactivate:[CanDeactivateGuard],
        component: ProductFormComponent
      },
    ]
  },
  {
    path: 'fairs',
    component: FairsDashboardComponent,
    canActivate:[AuthGuard,userRoleGuard],
     data: {
      userRole: ['superAdmin']
    },
    title: "Fairs",
    children: [
      {
        path: ':id',
        component: FairsDetailsComponent
      }
    ]
  },
  {
    path: 'path-not-found',
    component: PathNotFoundComponent,
    data: {
      msg: `page not found using static data !!!`
    }
  },
  {
    path: '**',
    redirectTo: 'path-not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }