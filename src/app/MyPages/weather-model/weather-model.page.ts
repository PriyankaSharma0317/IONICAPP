import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { RoomserviceService } from 'src/app/services/roomservice.service';

@Component({
  selector: 'app-weather-model',
  templateUrl: './weather-model.page.html',
  styleUrls: ['./weather-model.page.scss'],
})
export class WeatherModelPage implements OnInit {

  temperature: number;
  pressure: number;
  speed: number;            
  humidity: number;            
  weatherDetail: any;
  weatherIcon: string;

  constructor(private roomService: RoomserviceService, private modalCtrl: ModalController) {
    this.roomService.weather().subscribe(weatherResponse => {
      this.temperature = weatherResponse['main'].temp;
      this.pressure = weatherResponse['main'].pressure;
      this.humidity = weatherResponse['main'].humidity;
      this.weatherDetail = weatherResponse['weather'][0];
      this.speed = weatherResponse['wind'].speed;
      this.weatherIcon = `http://openweathermap.org/img/wn/${this.weatherDetail.icon}@4x.png`
    });
  }

  dismissModal() {
    this.modalCtrl.dismiss();
  }

  ngOnInit() {
  }

}
