import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoomserviceService } from 'src/app/services/roomservice.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {
  userId: string;
  emailId: string;
  nickName: string;

  constructor(private router: Router, private roomService: RoomserviceService ) {

    this.userId = localStorage.getItem('id');
    this.roomService.getUserById(this.userId).subscribe(res => {
      this.nickName = res['nickname']
      this.emailId = res['email']
    });
  }

  ngOnInit() {
  }

  openAccountPage() {
    this.router.navigate(['account'])
  }

  openSettingPage() {
    this.router.navigate(['setting'])
  }


}