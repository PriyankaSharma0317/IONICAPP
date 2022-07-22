import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { RoomserviceService } from 'src/app/services/roomservice.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  icons: any;
  icon: any;

  constructor(private roomService: RoomserviceService, private modalCtrl: ModalController) {
    this.roomService.getRoomIcons().subscribe((icon: any) => {
      this.icons = icon
    });
  }

  selectIcon(icon) {
    this.icon = icon;
    this.modalCtrl.dismiss(this.icon)
  }

  ngOnInit() {
  }

}
