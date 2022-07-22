import { Component, OnInit } from '@angular/core';
import { ActionSheetController, PopoverController } from '@ionic/angular';
import { Router } from '@angular/router';
import { PopoverPagePage } from '../popover-page/popover-page.page';
import { RoomserviceService } from 'src/app/services/roomservice.service';
import { Camera, CameraResultType } from '@capacitor/camera';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss']
})
export class AccountPage implements OnInit {

  text: string;
  userId: string;
  userNickname: string;
  userImage: any;

  constructor(private router: Router, private actionSheetController: ActionSheetController, private popoverController: PopoverController, private roomService: RoomserviceService) {
    this.userId = localStorage.getItem('id');
    this.roomService.getUserById(this.userId).subscribe(res => {
      this.userNickname = res['nickname']
    });
    this.text = localStorage.getItem('temp');
  }

  ngOnInit() {
  }

  async takePicture() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.DataUrl,
      // source: CameraSource.Photos
    });

    this.userImage = image.dataUrl;
  }

  async setProfilePhoto() {
    const actionSheet = await this.actionSheetController.create({
      cssClass: 'my-custom-class',
      buttons: [
        {
          text: 'Select from Album',
          role: 'select',
          handler: () => {
            this.takePicture();
          },
        },
        {
          text: 'Cancel',
          role: 'cancel'
        },
      ],
    });
    await actionSheet.present();
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      cssClass: 'my-custom-class',
      buttons: [
        {
          text: '°C',
          role: 'select',
          handler: () => {
            this.text = '°C';
          },
        },
        {
          text: '°F',
          role: 'select',
          handler: () => {
            this.text = '°F';
          },
        },
        {
          text: 'Cancel',
          role: 'cancel'
        },
      ],
    });
    await actionSheet.present();
    const temp = await actionSheet.onDidDismiss();
    localStorage.setItem('temp',this.text);

  }

  openRequestPage() {
    this.router.navigate(['account-and-security'])
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverPagePage,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true,
    });
    await popover.present();

    const nickname = await popover.onWillDismiss();
    this.userNickname = nickname.data;
  }
}