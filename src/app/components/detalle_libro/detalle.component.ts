import { Component, OnInit,Input } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Libro } from '../../models/libro';
import { LibroService } from '../../services/libros.service';

@Component({
    selector: 'app-detalle',
    templateUrl: './detalle.component.html',
    styleUrls: ['./detalle.component.scss'],
    animations: [routerTransition()]
})
export class DetalleComponent implements OnInit {

    libro:Libro;
    exist:number;

    constructor(private _libro:LibroService) {}

    ngOnInit() {
        this.libro=this._libro.getLibroAct();
        this.obtenerExis();
    }

    obtenerExis(){
        var aux = this._libro.getExistentes();
        this.exist=aux[parseInt(this.libro.ide.toString())];
    }

    reserva(){
        this._libro.setPagina(3);
    }

    volver(){
        this._libro.setPagina(1);
    }
}