import {Component, OnInit} from '@angular/core';
import {MessageService} from 'primeng/api';
import {Validators, FormControl, FormGroup, FormBuilder} from '@angular/forms';
import {SelectItem} from 'primeng/api';
import {ServicesRequestService} from "../../servirces/services/services-request.service";
import {Reservation} from "../../models/reservation";
import {AuthSessionService} from "../../servirces/authenticate/auth-session.service";
import {personClient} from "../../models/personClient";
import {ReservationsRequestService} from "../../servirces/reservations/reservations-request.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-get-reservations-by-user',
  templateUrl: './get-reservations-by-user.component.html',
  styleUrls: ['./get-reservations-by-user.component.css'],
  providers: [MessageService]
})
export class GetReservationsByUserComponent implements OnInit {
  user: personClient;
  showRatingg:boolean
  reservation1:Reservation
  reservation2:Reservation
  reservation3:Reservation
  reservation4:Reservation
  reservation5:Reservation
  reservations: Reservation []

  constructor(private request: ServicesRequestService, private authservices: AuthSessionService, private reservationsServices: ReservationsRequestService, private router: Router) {
  }

  ngOnInit() {
    this.showRatingg=false
    this.user = this.authservices.getCurrentUser()
    this.getReservations()
    



  }

  getFormatDate(dateAc: string) {
    let data = new Date(dateAc)
    let dataFormat = data.getFullYear() + "/" + data.getMonth() + "/" + data.getDay()
    return dataFormat
  }

  onRegisterNotification(userId: number, id: number) {
    console.log(userId)
    console.log(id)
    this.reservationsServices.registerNotification(userId, id).subscribe(data => {
      console.log(data)
      this.router.navigate(['services/getNotifications'])
    }, error => console.log(error))
  }
  showRating(){
    this.showRatingg=true;

  }
  getReservations() {


    this.reservationsServices.getReservations().subscribe(data => {
      this.reservations = data['data']


    }, error => console.log(error));
  }

}
