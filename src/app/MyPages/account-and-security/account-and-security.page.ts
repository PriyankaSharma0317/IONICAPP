import { Component, OnInit } from '@angular/core';
import { RoomserviceService } from 'src/app/services/roomservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-and-security',
  templateUrl: './account-and-security.page.html',
  styleUrls: ['./account-and-security.page.scss'],
})
export class AccountAndSecurityPage implements OnInit {
  userId: string;
  emailId: string;

  constructor(private roomService: RoomserviceService, private router:Router) {
    this.userId = localStorage.getItem('id');
    this.roomService.getUserById(this.userId).subscribe(res => {
      this.emailId = res['email']
  });
}

ngOnInit() {
}

openEmailPage(){
  this.router.navigate(['email-address'])
}

}
