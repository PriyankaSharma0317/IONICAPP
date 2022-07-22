import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { objectModel } from '../home/home.model';

const API_KEY = environment.API_KEY;
const API_URL = environment.API_URL;

@Injectable({
  providedIn: 'root'
})
export class RoomserviceService {
  constructor(private http: HttpClient) { }

  weather() {
    return this.http.get(`${API_URL}ludhiana&appid=${API_KEY}`)
  }

  signUp(users:any) {
    return this.http.post('http://localhost:3000/users/signup', users)
  }

  login(user:any) {
    return this.http.post('http://localhost:3000/users/login', user)
  }

  updateUser(userId:string, data:any) {
    return this.http.patch(`http://localhost:3000/users/${userId}`, data)
  }

  getUserById(userId:string) {
    return this.http.get(`http://localhost:3000/users/${userId}`)
  }

  addRoom(room: objectModel) {
    return this.http.post('http://localhost:3000/rooms/createRoom', room)
  }

  getRoomsByUserId(userId:string) {
    return this.http.get<any[]>(`http://localhost:3000/rooms/getByUserId/${userId}`)
  }

  getRoomByRoomId(roomId:string){
    return this.http.get(`http://localhost:3000/rooms/${roomId}`)
  }

  editRoom(roomId:string, data:any) {
    return this.http.patch(`http://localhost:3000/rooms/${roomId}`, data)
  }

  deleteRoom(roomId:string) {
    return this.http.delete(`http://localhost:3000/rooms/${roomId}`)
  }

  getRoomIcons() {
    return this.http.get('http://localhost:3000/icons/getRoomIcons')
  }

  getRoomDevices() {
    return this.http.get('http://localhost:3000/icons/getRoomDevices')
  }

  saveDevices(data:any){
    return this.http.post('http://localhost:3000/devices/saveDevices',data)
  }

  getDevices(roomId:string){
    return this.http.get(`http://localhost:3000/devices/getByRoomId/${roomId}`)
  }

  getAllDevices(userId:string){
    return this.http.get(`http://localhost:3000/devices/getDevices/${userId}`)
  }

  deleteDevices(deviceId:string){
    return this.http.delete(`http://localhost:3000/devices/${deviceId}`)
  }

  updateToggle(deviceId:string,data:any){
    return this.http.patch(`http://localhost:3000/devices/${deviceId}`,data)
  }

  getSmartAppl() {
    return this.http.get('http://localhost:3000/icons/getSmartAppl')
  }
}