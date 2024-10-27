// import { Component } from '@angular/core';
// import {StyleClassModule} from 'primeng/styleclass';
// import { ButtonModule } from 'primeng/button';
// import { RippleModule } from 'primeng/ripple';
// import { DialogModule } from 'primeng/dialog';
// import { InputTextModule } from 'primeng/inputtext';4
// import { CommonModule } from '@angular/common';
// import { RouterLink } from '@angular/router';
// import { RouterLinkActive } from '@angular/router';
// import { RouterOutlet } from '@angular/router';
// import {Router, ActivatedRoute } from '@angular/router';
// import { PrimeNGConfig } from 'primeng/api';
// import {CalendarModule} from 'primeng/calendar';
// import { FormControl, FormGroup, FormsModule,ReactiveFormsModule } from '@angular/forms';
// import { commonService } from '../../services/commonService';


// @Component({
//   selector: 'app-add-user',
//   standalone: true,
//   imports: [StyleClassModule,ReactiveFormsModule,CalendarModule,ButtonModule,RouterOutlet,RippleModule,DialogModule,InputTextModule,CommonModule,FormsModule],
//   templateUrl: './add-user.component.html',
//   styleUrl: './add-user.component.scss'
// })
// export class AddUserComponent {
//   visible: boolean = false;
//   visibleSign:boolean=false;
//   selectedMonth: any;
//   selectedDay: any;
//   selectedYear: any;
//   months: string[] = [];
//   days: number[] = [];
//   years: number[] = [];
//   date: Date | undefined;
//   value: Date | undefined;

//   formgroup: any = new FormGroup({

//   })
//   singUpData=new FormGroup({
//     username:new FormControl(""),
//     email:new FormControl(""),
//     password:new FormControl("")
//   })
//   constructor(private router:Router,private primengConfig: PrimeNGConfig,private commonService:commonService) {

//   }
//   ngOnInit(){
//     this.primengConfig.ripple = true;
//     this.populateMonths();
//     this.populateDays();
//     this.populateYears();
//     this.formgroup = new FormGroup({
//       date: new FormControl<Date | null>(null)
//   });
//   }


//     submitForm(){
//       let body ={
//         "username":this.singUpData.controls.username.value,
//         "email":this.singUpData.controls.email.value,
//         "password":this.singUpData.controls.password.value
//       }
//       this.commonService.signUp(body).subscribe(res=>{

//       })
//     }
//     showDialog() {
//       this.visible = true; 
//     }

//     showSignUp(){
//       this.visibleSign=true;
//     }

//     populateMonths() {
//       this.months = [
//         'January', 'February', 'March', 'April', 'May', 'June',
//         'July', 'August', 'September', 'October', 'November', 'December'
//       ];
//     }

//     populateDays() {
//       this.days = Array.from({ length: 31 }, (v, k) => k + 1);
//     }

//     populateYears() {
//       const currentYear = new Date().getFullYear();
//       const minAge = 18;
//       const maxAge = 100;
//       this.years = Array.from({ length: maxAge - minAge + 1 }, (v, k) => currentYear - minAge - k);
//     }

//     // goTo(value:any){
//     //   this.router.navigate(['/sign-up'])
//     // }
// }

import { Component } from '@angular/core';
import { StyleClassModule } from 'primeng/styleclass';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext'; 4
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { Router, ActivatedRoute } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { CalendarModule } from 'primeng/calendar';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonService } from '../../services/CommonService';
import { style } from '@angular/animations';
import { last } from 'rxjs';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [StyleClassModule, ReactiveFormsModule, CalendarModule, ButtonModule, HttpClientModule, RouterOutlet, RippleModule, DialogModule, InputTextModule, CommonModule, FormsModule],
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent {
  visible: boolean = false;
  visibleSign: boolean = false;
  selectedMonth: any;
  selectedDay: any;
  selectedYear: any;
  months: string[] = [];
  days: number[] = [];
  years: number[] = [];
  date: Date | undefined;
  value: Date | undefined;

  // formgroup: any = new FormGroup({

  // })
  loginData = new FormGroup({
    user:new FormControl("",Validators.required),
    userPass:new FormControl("",Validators.required)
  })
  singUpData = new FormGroup({
    username: new FormControl("", Validators.required),
    email: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required)
  })
  constructor(private router: Router, private primengConfig: PrimeNGConfig, private commonService: CommonService) {

  }
  ngOnInit() {
    this.primengConfig.ripple = true;
    this.populateMonths();
    this.populateDays();
    this.populateYears();
    // this.formgroup = new FormGroup({
    //   date: new FormControl<Date | null>(null)
    // });
  }

  submitForm() {
    document.getElementById('loader')!.style.display = 'block';
    let body = {
      username: this.singUpData.controls.username.value,
      email: this.singUpData.controls.email.value,
      password: this.singUpData.controls.password.value
    };
    
    this.commonService.signUp(body).subscribe(
      res => {
        console.log('User signed up successfully', res);
        document.getElementById('loader')!.style.display = 'none';
      },
      err => {
        console.error('Error signing up ', err);
      }
    );
    

  }
  login(){
    let body = {
      
    }
  }
  showDialog() {

    this.visible = true;
  }

  showSignUp() {
    this.visibleSign = true;
  }

  populateMonths() {
    this.months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
  }
  disableScroll() {
    // Get the current page scroll position 
    let scrollTop: number = window.pageYOffset || document.documentElement.scrollTop;
    let scrollLeft: number = window.pageXOffset || document.documentElement.scrollLeft;

    // Disable scrolling by restoring the previous scroll position on each scroll attempt
    window.onscroll = function () {
      window.scrollTo(scrollLeft, scrollTop);
    };
  }

  populateDays() {
    this.days = Array.from({ length: 31 }, (v, k) => k + 1);
  }

  populateYears() {
    const currentYear = new Date().getFullYear();
    const minAge = 18;
    const maxAge = 100;
    this.years = Array.from({ length: maxAge - minAge + 1 }, (v, k) => currentYear - minAge - k);
  }

  // goTo(value:any){
  //   this.router.navigate(['/sign-up'])
  // }
}
