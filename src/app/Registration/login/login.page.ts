import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { RoomserviceService } from 'src/app/services/roomservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  showAlert:boolean= false;
  loginForm: FormGroup;
  constructor(private fb: FormBuilder, private navCtrl: NavController, private roomService: RoomserviceService, private router: Router) {

    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$')]]
    });
  }

  login(data) {
    this.roomService.login(data).subscribe((res: any[]) => {
      if (res.length == 1) {
        this.router.navigate(['home'], {
          replaceUrl: true
        })
      }
      else{
        this.showAlert = true;
      };
      
      localStorage.setItem('id', res[0]._id)
      
    });
  }

  ngOnInit() { }
}