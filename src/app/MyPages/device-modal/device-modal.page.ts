import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { RoomserviceService } from 'src/app/services/roomservice.service';
import { deviceModel } from './device-modal.model';

@Component({
  selector: 'app-device-modal',
  templateUrl: './device-modal.page.html',
  styleUrls: ['./device-modal.page.scss'],
})
export class DeviceModalPage implements OnInit {

  devices: any;
  electronicDevice: any;
  roomId: string;
  id: string;
  userId: string;
  roomTitle:string;

  constructor(private roomService: RoomserviceService, private modalCtrl: ModalController, private navParams: NavParams) {
    this.roomService.getRoomDevices().subscribe(res => {
      this.devices = res;
    })
    this.roomId = this.navParams.data.roomId;
    this.userId = localStorage.getItem('id');

    this.roomService.getRoomByRoomId(this.roomId).subscribe(res=>{
      this.roomTitle = res['title']
    })
  }

  selectDevice(device: deviceModel) {
    device.roomId = this.roomId;
    device.userId = this.userId;
    device.roomName = this.roomTitle;
      this.roomService.saveDevices(device).subscribe(result => {
        this.electronicDevice = result;
      });
    this.modalCtrl.dismiss(this.electronicDevice);
  }

  ngOnInit() {
  }

}
