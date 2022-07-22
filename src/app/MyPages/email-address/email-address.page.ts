import { Component, OnInit } from '@angular/core';
import { RoomserviceService } from 'src/app/services/roomservice.service';

@Component({
  selector: 'app-email-address',
  templateUrl: './email-address.page.html',
  styleUrls: ['./email-address.page.scss'],
})
export class EmailAddressPage implements OnInit {
  userId: string;
  emailId: string;

  constructor(private roomService: RoomserviceService) {
    this.userId = localStorage.getItem('id');
    this.roomService.getUserById(this.userId).subscribe(res => {
      this.emailId = res['email']
    });
  }

  ngOnInit() {
  }

}
