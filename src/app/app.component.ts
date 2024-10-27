import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { RippleModule } from 'primeng/ripple';
import { RouterOutlet } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import {StyleClassModule} from 'primeng/styleclass';
import { SignupComponent } from './signup/signup.component';
import { LoaderComponent } from './loader/loader.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [StyleClassModule,RouterOutlet,LoaderComponent,SignupComponent,AddUserComponent,MenubarModule,CommonModule,RippleModule,AvatarModule,BadgeModule,InputTextModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',

})
export class AppComponent implements OnInit {
  title = 'frontEnd';
  items: MenuItem[] | undefined;
  ngOnInit(): void {
    this.items = [
      {
          label: 'Home',
          icon: 'pi pi-home'
      },
      {
          label: 'Features',
          icon: 'pi pi-star'
      },
      {
          label: 'Projects',
          icon: 'pi pi-search',
          
      },
      
  ];
}


}
