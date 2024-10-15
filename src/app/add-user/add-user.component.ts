import { Component } from '@angular/core';
import {StyleClassModule} from 'primeng/styleclass';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';4
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [StyleClassModule,ButtonModule,RippleModule,DialogModule,InputTextModule,CommonModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss'
})
export class AddUserComponent {
  visible: boolean = false;

    showDialog() {
        this.visible = true;
        console.log("clicked button");
        
    }
}
