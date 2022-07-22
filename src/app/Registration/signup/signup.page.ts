import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { RoomserviceService } from 'src/app/services/roomservice.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  signUpForm: FormGroup;
  randomNumber: number;

  constructor(private fb: FormBuilder, private router: Router, private roomService: RoomserviceService) {

    this.signUpForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z0-9]*')]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', ([Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$')])]
    });
  }

  signUp(data: any) {
    this.randomNumber = Math.floor(100000 + Math.random() * 900000);
    data.status = 0;
    data.random = this.randomNumber
    this.roomService.signUp(data).subscribe(res => {
      console.log(res)
    });
    if (this.signUpForm.valid) {
      this.router.navigate(['login']);
    }
  }

  sendEmail() {
  

  }

  ngOnInit() { }
}