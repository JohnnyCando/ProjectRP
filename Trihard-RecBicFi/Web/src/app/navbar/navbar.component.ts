import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {AuthSessionService} from "../servirces/authenticate/auth-session.service";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  items: MenuItem[];
  itemsLogout: MenuItem[];
  LogIn: any

  constructor(private authservices: AuthSessionService) {
  }

  ngOnInit() {
    this.LogIn = this.authservices.getValidate()

    console.log(this.LogIn)
    this.itemsLogout = [
      {
        label: 'Inicio', icon: 'fa fa-fw fa-check', routerLink: 'home'
      },
      {
        label: 'Productos', icon: 'fa fa-fw fa-soccer-ball-o', routerLink: 'services'
      },
      {
        label: 'Conocenos', icon: 'fa fa-fw fa-child', routerLink : 'aboutUs'
      },
      {
        label: 'Mis transaciones', icon: 'fa fa-fw fa-soccer-ball-o', routerLink: 'services/getReservations'
      },
      {
        label: 'Perfil', icon: 'fa fa-fw fa-child', routerLink: 'user/profile',
      },
      {
        label: 'Contactanos', icon: 'fa fa-fw fa-gears', routerLink: 'contact',
      }
    ];
    this.items = [
      {
        label: 'Inicio', icon: 'fa fa-fw fa-check', routerLink: 'home'
      },
      
      
      {
        label: 'Conocenos', icon: 'fa fa-fw fa-child', routerLink: 'aboutUs'
       
      },
      {
        label: 'Contactanos', icon: 'fa fa-fw fa-gears', routerLink: 'contact',
      }
    ];

  }

  logOut() {
    this.LogIn = false
    this.authservices.logoutUser()

  }
  crearDato() {
    return console.log("entre")
  }

}
