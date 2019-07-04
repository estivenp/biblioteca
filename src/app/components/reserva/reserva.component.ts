import { Component, OnInit, Input } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Libro } from '../../models/libro';
import { Reserva } from '../../models/reserva';
import { LibroService } from '../../services/libros.service';
import { ReservaService } from '../../services/reservas.service';

@Component({
    selector: 'app-reserva',
    templateUrl: './reserva.component.html',
    styleUrls: ['./reserva.component.scss'],
    animations: [routerTransition()]
})
export class ReservaComponent implements OnInit {

    libro: Libro;
    reserva: Reserva;

    constructor(private _libro: LibroService, private _reserva: ReservaService) { }

    ngOnInit() {
        this.libro = this._libro.getLibroAct();
        this.reserva = new Reserva("", this.libro.titulo, this.libro.ide, new Date(), new Date(), 0, "Reservado");
    }

    volver() {
        this._libro.setPagina(2);
    }

    // metodo para generar la reserva
    reservar() {
        if (confirm("¿Esta seguro que de reservar el libro?")) {
            this._reserva.agregarReserva(this.reserva);
            var aux = this._libro.getExistentes();
            aux[parseInt(this.libro.ide.toString())] = aux[parseInt(this.libro.ide.toString())] - 1;
            this._libro.setExistentes(aux);
            alert("La reserva ha sido registrada");
            this._libro.setPagina(1);
        }
    }
}