import {Component, Input, OnInit} from '@angular/core';
import { icon, latLng, marker, tileLayer } from 'leaflet';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  @Input() token
  options: { center: any; layers: any[]; zoom: number };
  summit: any;
  paradise: any
  streetMaps: any;
  wMaps: any
  route: any;
  constructor() { }

  ngOnInit() {
    this.createMap(this.token.latitud, this.token.longitud);
    this.token.latitud, this.token.longitud = 0;
  }
 createMap(latitud, longitud) {
   this.streetMaps = tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
     detectRetina: true,
     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
   });
   console.log(latitud, longitud + " entre")
   this.summit = marker([ latitud, longitud ], {
     icon: icon({
       iconSize: [ 25, 41 ],
       iconAnchor: [ 13, 41 ],
       iconUrl: '../../assets/leaflet/images/marker-icon.png',
       shadowUrl: '../../assets/leaflet/images/marker-shadow.png'
     })
   });
   this.options = {
     layers: [
       this.streetMaps, this.summit
     ],
     zoom: 25,
     center: latLng([latitud, longitud ])
   };
 }
}
