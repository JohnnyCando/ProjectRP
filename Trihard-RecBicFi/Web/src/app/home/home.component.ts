import {AfterViewInit,Input, Component, OnInit} from '@angular/core';
import {Services} from "../models/services";
import {ServicesRequestService} from "../servirces/services/services-request.service";
import {AuthSessionService} from "../servirces/authenticate/auth-session.service"
import {SelectItem} from "primeng/api";
import {Enterprises} from "../models/enterprises"
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit  {
  // solicitar logueo , despues de generar la cotizacion.
  showEnterprises: boolean
  products :  Services[]
  map
  cantidad:number
  localitie_id:number
  selectedProduct
  validate1:any
  localities = []
  responsiveOptions;
  displayDialogLogin: boolean
  displayDialog: boolean;
  enterprises : Enterprises[]
  selectedEnterprise
  sortOptions: SelectItem[];
  sortKey: string;
  sortField: string;

  sortOrder: number;

  constructor(private authservices: AuthSessionService, private servicesReq:ServicesRequestService) {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }
  ngOnInit() {
    console.log("entre" + this.validate1)
    this.getProductss()
    this.showEnterprises = false;
    this.sortOptions = [
      {label: 'Newest First', value: '!year'},
      {label: 'Oldest First', value: 'year'},
      {label: 'Brand', value: 'brand'}
    ];
    this.localities = [];
    this.localities.push({label: 'Selecciona una localidad', value: ''});
    this.localities.push({label: 'Quito', value: '1'});
    this.localities.push({label: 'Guayaquil', value: '2'});
    this.localities.push({label: 'Cuenca', value: '3'});

  }
  selectCarS(event: Event, enterprise){
    this.selectedEnterprise = enterprise;
    this.displayDialogLogin = true;
    event.preventDefault();
    this.validate1 = this.authservices.getValidate()

  }
  getEnterprises(id ){
    this.servicesReq.getEnterprises(id).subscribe(data=>{
      this.enterprises = data['data']
      console.log(data)
    },error=>{
      console.log(error)
    }
    )
  }
  selectCar(event: Event, enterprise) {
    this.selectedEnterprise = enterprise;
    this.displayDialog = true;
    event.preventDefault();
  }
  getProductss() {
    this.servicesReq.getProducts().subscribe(data => {
      this.products = data['data']
      console.log(data)
    }, error => {
      console.log(error)
    })
  }
  calcularCotizacion(cantidad:number){

  }
  getImage(base64: string, typeImage: string) {
    let image = 'data:' + typeImage + ";base64," + base64
    return image
  }
  selectProduct(event:Event, product) {
    this.selectedProduct = product
    event.preventDefault()
    this.showEnterprises = true;
    console.log("producto "+ this.selectedProduct.title)
  }
  onDialogHide() {
    this.selectedEnterprise = null;
  }

}
