import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';

import { Reserva } from '../models/reserva';

@Injectable({
    providedIn: 'root'
  })
  export class ReservaService {
  
    private  reservas:Reserva[];
  
    constructor(private _http:HttpClient) { 
      this.reservas=[];
    }
  
    getReservasAct():Reserva[]{
      return this.reservas;
    }
    setReservasAct(res:Reserva[]){
      this.reservas=res;
    }
    agregarReserva(res:Reserva){
        this.reservas.push(res);
    }
  }
  