import { Routes } from '@angular/router';
import { HomeComponent } from './files/home/home.component';
import { ProductComponent } from './files/product/product.component';
import { LoginFormComponent } from './files/login-form/login-form.component';
import { SignUpComponent } from './files/sign-up/sign-up.component';
import { AboutComponent } from './files/about/about.component';
import { DashboardComponent } from './files/dashboard/dashboard.component';

export const routes: Routes = [
    {
        path: '', redirectTo: 'home', pathMatch: 'full'
    },
    {
        path: 'home', component: HomeComponent
    },
    {
        path: 'dashboard', component: DashboardComponent
    },
    {
        path: 'product', component: ProductComponent
    },
    {
        path: 'login', component: LoginFormComponent
    },
    {
        path: 'signUp', component: SignUpComponent
    },
    {
        path: 'about', component: AboutComponent
    },
    
];
