import { Component, OnInit } from '@angular/core';
import {Reserva} from '../../models/reserva';
import { ReservaService } from '../../services/reservas.service';

@Component({
    selector: 'mis-reservas',
    templateUrl: './mis_reservas.component.html',
    styleUrls: ['./mis_reservas.component.scss']
})
export class MisReservasComponent implements OnInit {

    collapedSideBar: boolean;
    reservas:Reserva[];
    // search:String;
    // filtro:String;
    // generos:String[];

    constructor(private _reserva:ReservaService) {
        this.reservas=[];
        // this.search="";
        // this.filtro="0"
        // this.generos=[];
    }

    ngOnInit() {
        this.cargarReserva();
     }

    receiveCollapsed($event) {
        this.collapedSideBar = $event;
    }

    // informacion(indice:number){
    //     this._libro.setLibroAct(this.libros[indice]);   
    //     alert("ir a informacion del libro:   "+this.libros[indice].titulo);  
    // }

    cargarReserva(){
        this.reservas=this._reserva.getReservasAct();   
    }
}
