import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {isNullOrUndefined} from "util";
import {AuthSessionService} from "../authenticate/auth-session.service";
import { Reservation } from 'src/app/models/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationsRequestService {
  validatedata=0
reservation=[]
reservationTemp: Reservation ={
  product:{
    title:'',
    unidad:''
  },
  enterprise:{
    title:'',
    costBottle:'',
    costGlass:'',
    costMetal:'',
    costPaper:''
  },
  reservation_date:'',
  reservation_hour:''
}
  constructor(private http: HttpClient, private authservices: AuthSessionService) {
  }

  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json",
    Authorization: 'Bearer ' + this.authservices.getToken()
  });

  registerReservations(user_id: number, sub_service_id: number, hairdressers: string, reservation_date: string, reservation_hour: string) {
    const url_api = "http://localhost:3001/server/reservations/register"
    return this.http.put(url_api, {
      params: {
        user_id: user_id,
        sub_service_id: sub_service_id,
        hairdressers: hairdressers,
        reservation_date: reservation_date,
        reservation_hour: reservation_hour
      }


    }, {
      headers: this.headers
    }).pipe(map(data => data))

  }
  createReservation(user_id,product,enterprise,reservation_date,reservation_hour){
    let enterprise_id = enterprise
    let product_id=product
    
  
    const url_api = "http://localhost:3001/server/reservations/register"
    return this.http.put(url_api, {
      params:
        {
          user_id,
          product_id,
          enterprise_id,
          reservation_date,
          reservation_hour,

        }
    }, {headers: this.headers}).pipe(map(data => data))
    
    
  }
  
  


  registerNotification(user_id: number, reservation_id: number) {
    console.log("enter http", user_id, reservation_id)
    const url_api = "http://localhost:3001/server/reservations/registerNotification"
    return this.http.put(url_api, {
      params:
        {
          user_id,
          reservation_id
        }
    }, {headers: this.headers}).pipe(map(data => data))
  }
  

  getReservations() {
    const url_api = "http://localhost:3001/server/reservations/getReservas"
    return this.http.get(url_api, {headers: this.headers}).pipe(map(data => data))
  }

  getNotifications(user_id: number) {
    const url_api = "http://localhost:3001/server/reservations/getNotification"
    return this.http.post(url_api, {params: {user_id}}, {headers: this.headers}).pipe(map(data => data))
  }


}
