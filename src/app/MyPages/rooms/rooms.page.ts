import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { RoomserviceService } from 'src/app/services/roomservice.service';
import { DeviceModalPage } from '../device-modal/device-modal.page';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.page.html',
  styleUrls: ['./rooms.page.scss'],
})
export class RoomsPage implements OnInit {

  segmentData: any;
  room: any;
  roomTitle: string;
  toggle: boolean[] = [];
  count: number = 0;
  counter: number = 1;
  userId: string;
  roomId: string;
  id: string;
  show: boolean = true;
  showIcon: boolean = true;
  electronicDevice: any;
  showSubTitle: boolean = false;

  constructor(private roomService: RoomserviceService, private route: ActivatedRoute, private modalCtrl: ModalController, private alertController: AlertController) {

    this.room = this.route.snapshot.params['room'];
    this.roomId = this.route.snapshot.params['roomId'];
    this.userId = localStorage.getItem('id');
    this.roomService.getRoomsByUserId(this.userId).subscribe(title => {
      this.segmentData = title;
    });
    this.roomService.getDevices(this.roomId).subscribe(response => {
      this.electronicDevice = response;
      this.condition();
      this.showSubTitle = false;
    });
  } 

  togglebtn(deviceId: string,device) {
    this.toggle[deviceId] = !this.toggle[deviceId];
    device.toggle = this.toggle[deviceId];
    device.count = this.count;
    this.roomService.updateToggle(deviceId,device).subscribe();
    if (this.toggle[deviceId] == true ) {
      this.count++;
    }
    else {
      this.count--;
    }
  }
  ngOnInit() {
  }

  async presentModal() {
    const modal = await this.modalCtrl.create({
      component: DeviceModalPage,
      cssClass: 'my-modal',
      componentProps: {
        'roomId': this.id || this.roomId
      }
    });
    await modal.present();
  }

  condition() {
    if (this.electronicDevice.length >= 1) {
      this.show = false;
    }
    else {
      this.show = true;
    }
  }

  displayDevices(data: any) {
    this.id = data._id;
    this.roomService.getDevices(this.id).subscribe(result => {
      this.electronicDevice = result;
      this.condition();
      this.showSubTitle = false;
      this.showIcon = true;
    })
  }

  displayAllDevices() {
    this.roomService.getAllDevices(this.userId).subscribe(res => {
      this.electronicDevice = res;
      this.condition();
      this.showSubTitle = true;
      this.showIcon = false;
    })
  }

  async deleteDevice(ev: Event, deviceId: string) {
    ev.stopPropagation();
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      message: 'Are you sure you want to delete this device?',
      buttons: [
        {
          text: 'Cancel',
          cssClass: 'secondary',
          id: 'cancel-button',
          handler: () => {
            return this.electronicDevice;
          }
        },
        {
          text: 'Okay',
          id: 'confirm-button',
          handler: () => {
            this.roomService.deleteDevices(deviceId).subscribe();
          }
        }
      ]
    });
    await alert.present();
  }

  segmentChanged(ev: Event) {
    this.roomTitle = ev['detail'].value
  }
}
