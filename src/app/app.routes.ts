import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { AddUserComponent } from './add-user/add-user.component';

export const routes: Routes = [
    {
        // path:'userList',component:UserComponent
    },
    {
        path:'newUser',component:AddUserComponent
    }
];
