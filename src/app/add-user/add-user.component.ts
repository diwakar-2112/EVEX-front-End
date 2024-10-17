import { Component } from '@angular/core';
import {StyleClassModule} from 'primeng/styleclass';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';4
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import {Router, ActivatedRoute } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';


@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [StyleClassModule,ButtonModule,RouterOutlet,RippleModule,DialogModule,InputTextModule,CommonModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss'
})
export class AddUserComponent {
  visible: boolean = false;
  constructor(private router:Router,private primengConfig: PrimeNGConfig) {

  }
  ngOnInit(){
    this.primengConfig.ripple = true;
  }
    showDialog() {
        this.visible = true;
        console.log("clicked button");
        
    }
    goTo(value:any){
      this.router.navigate(['/sign-up'])
    }
}
