import { Component, OnInit } from '@angular/core';
import {Libro} from '../../models/libro';
import { LibroService } from '../../services/libros.service';

@Component({
    selector: 'app-biblioteca',
    templateUrl: './biblioteca.component.html',
    styleUrls: ['./biblioteca.component.scss']
})
export class BibliotecaComponent implements OnInit {

    collapedSideBar: boolean;
    pagina:number;

    constructor(public _libro:LibroService) {
    }

    ngOnInit() {
        this._libro.setPagina(1);
     }

    receiveCollapsed($event) {
        this.collapedSideBar = $event;
    }
}
