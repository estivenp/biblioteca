import { Component, OnInit } from '@angular/core';
import {Libro} from '../m_libro/libro';

@Component({
    selector: 'app-biblioteca',
    templateUrl: './biblioteca.component.html',
    styleUrls: ['./biblioteca.component.scss']
})
export class BibliotecaComponent implements OnInit {

    libros:Libro;

    constructor() {
        
    }

    ngOnInit() { }

    cargarLibros(){
        this.libros={titulo:"La Rebelion de las ratas",autor:"Fernando Soto Aparicio",genero:"Novela", 
        numEdicion:1,uniExistentes:3,uniDisponibles:3, resena:"Cuenta la historia de Timbalí, un pueblo ficticio que el escritor ubica en el departamento de Boyacá y que se encuentra bajo el dominio de las multinacionales estadounidenses. Los acontecimientos que tienen lugar en la novela ocurren durante el mes de febrero en un año no especificado, y pretenden mostrar al lector cómo la industria extranjera se aprovecha de las circunstancias económicas de las familias campesinas y, al mismo tiempo, deja ver la manera en la que el sentimiento revolucionario, en busca de justicia, enardece los corazones humanos y se aprecia la realidad de la explotación."
        , imagen:"assets/images/slider1"};
    }
}
