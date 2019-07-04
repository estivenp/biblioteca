import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';

import { Reserva } from '../models/reserva';

@Injectable({
    providedIn: 'root'
  })
  export class ReservaService {
  
    //private url:string;//direccion para obtener materias o agregar una
    private  reservas:Reserva[];//Referencia de la materia que se quiera actualizar
    //private pagina:number;//Indica en que pagina estoy(listar=1,agregar=2)
  
    constructor(/*private _http:Http,*/private _http:HttpClient) { 
      //this.url="https://api.myjson.com/bins/11pcld";
      //this.pagina=1;
      this.reservas=[];
    }
  
    // getLibro(){
    //   return this._http.get<Libro[]>(this.url);
    // }
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
  