export interface Reservation {
  id?: number,
  product?:{
    title?:string,
    unidad?:string
  },
  enterprise?:{
    title?:string,
    costBottle?:string,
    costGlass?:string,
    costMetal?:string,
    costPaper?:string
  },
  name?: string,
  created_at?: string,
  user_id?: number,
  duration?: number
  state?: string,
  services_id?: number,
  hairdressers?: string,
  reservation_date?: string,
  reservation_hour?: string,
  sub_service_id?: number,
}
