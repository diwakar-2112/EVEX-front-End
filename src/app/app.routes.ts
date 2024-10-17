import { Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { SignupComponent } from './signup/signup.component';

export const routes: Routes = [
    { path: 'newUser', component: AddUserComponent },
    { path: 'sign-up', component: SignupComponent },
    { path: '', redirectTo: 'newUser', pathMatch: 'full'} 
];

