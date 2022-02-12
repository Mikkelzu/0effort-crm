import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppbarComponent } from './appbar/appbar.component'
import { MaterialModule } from 'src/material.module';
import { DatatableComponent } from './datatable/datatable.component';
import { CustomerComponent } from './customer/customer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import {  HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './services/jwt-interceptor';
import { AuthGuardService as AuthGuard } from './services/authguard.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
    declarations: [
        AppComponent,
        AppbarComponent,
        DatatableComponent,
        CustomerComponent,
        HomeComponent,
        LoginComponent,
        DashboardComponent,
        LogoutComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MaterialModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        AuthGuard,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

