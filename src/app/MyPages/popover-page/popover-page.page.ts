import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PopoverController } from '@ionic/angular';
import { RoomserviceService } from 'src/app/services/roomservice.service';

@Component({
  selector: 'app-popover-page',
  templateUrl: './popover-page.page.html',
  styleUrls: ['./popover-page.page.scss'],
})
export class PopoverPagePage implements OnInit {
  nickName: FormGroup;
  userId: string;
  name:string;

  constructor(private popoverCtrl: PopoverController,private roomservice:RoomserviceService,private fb:FormBuilder) {
    this.nickName = this.fb.group({
      nickname: ['', [Validators.required,Validators.minLength(3)]]
    });
    this.userId = localStorage.getItem('id');
    this.roomservice.getUserById(this.userId).subscribe(res=>{
      this.name = res['nickname'];
    });
 }

  ngOnInit() {
  }

  cancel() {
      this.popoverCtrl.dismiss(this.name);
  }

  save(res:any) {
    this.roomservice.updateUser(this.userId,res).subscribe();
    this.popoverCtrl.dismiss(res['nickname']);
  }

  clear() {
    this.nickName.reset();
  }
}