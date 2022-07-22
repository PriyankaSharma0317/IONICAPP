import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ModalController, NavParams, PopoverController } from '@ionic/angular';
import { RoomserviceService } from 'src/app/services/roomservice.service';
import { AddPage } from '../MyPages/add/add.page';
import { WeatherModelPage } from '../MyPages/weather-model/weather-model.page';
import { Geolocation } from '@capacitor/geolocation';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@awesome-cordova-plugins/native-geocoder/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers: [NavParams]
})
export class HomePage implements OnInit {
  addRoom: any[] = [];
  toggle: boolean[] = [];
  temperature: number;
  weatherDetail: any;
  weatherIcon: string;
  userId: string;
  roomId: string;
  userName: string;
  show: boolean = true;
  showFooter: boolean = false;
  icon: any;
  location: any;
  options: NativeGeocoderOptions = {
    useLocale: true,
    maxResults: 5
  };

  constructor(private roomService: RoomserviceService, private router: Router, private popoverController: PopoverController, private alertController: AlertController, private modalCtrl: ModalController, private nativeGeocoder: NativeGeocoder) {

    this.userId = localStorage.getItem('id');
    this.roomService.getRoomsByUserId(this.userId).subscribe((result: any) => {
      this.addRoom = result;
      if (this.addRoom.length >= 1) {
        this.show = false;
        this.showFooter = true;
      }
    });

    this.roomService.getUserById(this.userId).subscribe(data => {
      this.userName = data['name'];
    });

    this.roomService.weather().subscribe(weatherResponse => {
      this.temperature = weatherResponse['main'].temp;
      this.weatherDetail = weatherResponse['weather'][0];
      this.weatherIcon = `http://openweathermap.org/img/wn/${this.weatherDetail.icon}@4x.png`
    });
  }

  togglebtn(index: number, ev: Event) {
    ev.stopPropagation();
    this.toggle[index] = !this.toggle[index];
  }

  selectRoom(res: any, ev: Event) {
    ev.stopPropagation();
    this.router.navigate([`rooms`, {
      room: res['title'],
      roomId: res['_id']
    }])
  }

  openRequestPage() {
    this.router.navigate(['add']);
  }

  openAccountPage() {
    this.router.navigate(['account'])
  }

  async editRoom(ev: Event, index: number) {
    ev.stopPropagation();
    const popover = await this.popoverController.create({
      component: AddPage,
      componentProps: {
        'index': index,
        'edit': ev.type
      },
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true,
    });
    await popover.present();
  }

  async deleteRoom(ev: Event, index: number) {
    ev.stopPropagation();
    this.roomId = this.addRoom[index]._id;
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      message: 'Are you sure you want to delete this room?',
      buttons: [
        {
          text: 'Cancel',
          cssClass: 'secondary',
          id: 'cancel-button',
          handler: () => {
            return this.addRoom;
          }
        },
        {
          text: 'Okay',
          id: 'confirm-button',
          handler: () => {
            this.roomService.deleteRoom(this.roomId).subscribe();
          }
        }
      ]
    });
    await alert.present();
  }

  async presentWeatherModal() {
    const modal = await this.modalCtrl.create({
      component: WeatherModelPage,
      cssClass: 'my-modal'
    });
    await modal.present();
  }

  async fetchLocation() {
    const location = await Geolocation.getCurrentPosition();
    console.log(location);

    this.nativeGeocoder.reverseGeocode(location.coords.latitude, location.coords.longitude, this.options).then((result: NativeGeocoderResult[]) => {
      console.log(result)
    })
  }

  ngOnInit(): void { }
}