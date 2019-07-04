import { Component, OnInit, Input } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Libro } from '../../models/libro';
import { Reserva } from '../../models/reserva';
import { LibroService } from '../../services/libros.service';
import { ReservaService } from '../../services/reservas.service';
import { Usuario } from 'src/app/models/usuario';


@Component({
    selector: 'app-reserva',
    templateUrl: './reserva.component.html',
    styleUrls: ['./reserva.component.scss'],
    animations: [routerTransition()]
})
export class ReservaComponent implements OnInit {

    libro: Libro;
    reserva: Reserva;
    usuario: Usuario;
    fechaMin:Date;
    fechaMax:Date;

    constructor(private _libro: LibroService, private _reserva: ReservaService) { }

    ngOnInit() {
        this.libro = this._libro.getLibroAct();
        this.reserva = new Reserva('', this.libro.titulo, this.libro.ide, new Date(), new Date(), 0, 'Reservado');
        this.usuario = new Usuario('Tania Cañizares', 'ctania@unicauca.edu.co', null, null);
        this.fechaMin=new Date();
        this.fechaMax = new Date();
        this.fechaMax.setDate(this.fechaMax.getDate()+7);
        this.reserva.fechaEnt.setDate(this.reserva.fechaEnt.getDate()+1);
    }

    volver() {
        this._libro.setPagina(2);
    }

    getNombre() {
        return this.usuario.nombre;
    }

    reservar() {
        if (confirm('¿Esta seguro que de reservar el libro?')) {
            this._reserva.agregarReserva(this.reserva);
            const aux = this._libro.getExistentes();
            aux[parseInt(this.libro.ide.toString())] = aux[parseInt(this.libro.ide.toString())] - 1;
            this._libro.setExistentes(aux);
            alert('La reserva ha sido registrada');
            this._libro.setPagina(1);
        }
    }
}
