import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController, NavParams, PopoverController } from '@ionic/angular';
import { objectModel } from 'src/app/home/home.model';
import { RoomserviceService } from 'src/app/services/roomservice.service';
import { ModalPage } from '../modal/modal.page';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
  providers: [NavParams]
})
export class AddPage implements OnInit {

  room: FormGroup;
  iconObj: any;
  icons: any;
  userId: string;
  selectedIcon: any;
  index: number;
  roomId: string;
  edit: any;

  constructor(private fb: FormBuilder, private router: Router, private roomService: RoomserviceService, private modalCtrl: ModalController, private navParams: NavParams, private popover: PopoverController) {

    this.room = this.fb.group({
      title: ['', Validators.required],
      icon: ['', Validators.required]
    });

    this.edit = this.navParams.data.edit;
    this.userId = localStorage.getItem('id');
    this.index = this.navParams.data.index;
    this.roomService.getRoomsByUserId(this.userId).subscribe(res => {
      this.roomId = res[this.index]?._id;
    })
  }

  ngOnInit() { }

  submit(result: objectModel) {
    result.userId = this.userId;
    this.roomService.addRoom(result).subscribe();
    this.router.navigate(['home']);
    this.room.reset();
  }

  async presentModal() {
    const modal = await this.modalCtrl.create({
      component: ModalPage,
      cssClass: 'my-modal'
    });
    await modal.present();
    const modalResponse = await modal.onWillDismiss();
    this.iconObj = modalResponse.data;
    this.icons = this.iconObj['icon'];
  }

  updateRoom(res: any) {
    this.roomService.editRoom(this.roomId, res).subscribe();
    this.popover.dismiss();
  }

  dismissModal() {
    if (this.edit) {
      this.popover.dismiss();
    }
    else {
      this.router.navigate(['home'])
    }
  }


}