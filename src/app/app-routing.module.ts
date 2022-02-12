import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DatatableComponent } from './datatable/datatable.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGuardService as AuthGuard } from './services/authguard.service';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent, runGuardsAndResolvers: 'always' },
    { path: 'logout', component: LogoutComponent, canActivate: [AuthGuard], runGuardsAndResolvers: 'always'  },
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard], runGuardsAndResolvers: 'always'   },
    { path: 'customers', component: DatatableComponent, canActivate: [AuthGuard], runGuardsAndResolvers: 'always'   },
    { path: 'customer/:id', component: CustomerComponent, canActivate: [AuthGuard], runGuardsAndResolvers: 'always'   },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
