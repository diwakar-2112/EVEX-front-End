import { Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: 'newUser', component: AddUserComponent },
    { path: 'sign-up', component: SignupComponent },
    {path:'home',component:HomeComponent},
    { path: '', redirectTo: 'newUser', pathMatch: 'full'} 
];

