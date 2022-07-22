import { Component, OnInit } from '@angular/core';
import { RoomserviceService } from 'src/app/services/roomservice.service';

@Component({
  selector: 'app-smart-appl',
  templateUrl: './smart-appl.page.html',
  styleUrls: ['./smart-appl.page.scss'],
})
export class SmartApplPage implements OnInit {
  smartAppl: any;

  constructor(private roomService: RoomserviceService) {
    this.roomService.getSmartAppl().subscribe(appl => {
      this.smartAppl = appl
    });
  }

  ngOnInit() {
  }

}
