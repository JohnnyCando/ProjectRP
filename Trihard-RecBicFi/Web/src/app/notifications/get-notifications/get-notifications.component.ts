import {Component, OnInit} from '@angular/core';
import {ReservationsRequestService} from "../../servirces/reservations/reservations-request.service";
import {MessageService} from "primeng/api";
import {Reservation} from "../../models/reservation";
import {AuthSessionService} from "../../servirces/authenticate/auth-session.service";
import {personClient} from "../../models/personClient";

@Component({
  selector: 'app-get-notifications',
  templateUrl: './get-notifications.component.html',
  styleUrls: ['./get-notifications.component.css'],
  providers: [MessageService]
})
export class GetNotificationsComponent implements OnInit {
  notifications: Reservation []
  user: personClient;

  constructor(private reservationServices: ReservationsRequestService, private authservices: AuthSessionService) {
  }

  ngOnInit() {
    this.user = this.authservices.getCurrentUser()
    this.getNotifications()
  }

  getFormatDate(dateAc: string) {
    let data = new Date(dateAc)
    let dataFormat = data.getFullYear() + "/" + data.getMonth() + "/" + data.getDay()
    return dataFormat
  }

  getNotifications() {

    this.reservationServices.getNotifications(this.user.id).subscribe(data => {
      this.notifications = data['data']


    }, error => console.log(error));
  }
}
