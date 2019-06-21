import { Component, OnInit } from '@angular/core';
import {Libro} from '../../models/libro';
import { LibroService } from '../../services/libros.service';

@Component({
    selector: 'app-listar',
    templateUrl: './listar.component.html',
    styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {

    collapedSideBar: boolean;
    libros:Libro[];
    search:String;
    filtro:String;
    generos:String[];
    pagina:number;

    constructor(private _libro:LibroService) {
        // this.libro={titulo:"La Rebelion de las ratas",autor:"Fernando Soto Aparicio",genero:"Novela", 
        // numEdicion:1,uniExistentes:3,uniDisponibles:3, resena:"Cuenta la historia de Timbalí, un pueblo ficticio que el escritor ubica en el departamento de Boyacá y que se encuentra bajo el dominio de las multinacionales estadounidenses. Los acontecimientos que tienen lugar en la novela ocurren durante el mes de febrero en un año no especificado, y pretenden mostrar al lector cómo la industria extranjera se aprovecha de las circunstancias económicas de las familias campesinas y, al mismo tiempo, deja ver la manera en la que el sentimiento revolucionario, en busca de justicia, enardece los corazones humanos y se aprecia la realidad de la explotación."
        // , imagen:"assets/images/libros/el-castillo.jpg"};
        this.libros=[];
        this.search="";
        this.filtro="0"
        this.generos=[];
    }

    ngOnInit() {
        this.cargarLibros();
        this.pagina=this._libro.getPagina();
     }

    receiveCollapsed($event) {
        this.collapedSideBar = $event;
    }

    informacion(indice:number){
        this._libro.setLibroAct(this.libros[indice]);   
        this._libro.setPagina(2);
    }

    cargarGeneros(){
        for(let item of this.libros){
            if(!this.generos.includes(item.genero)){
                this.generos.push(item.genero);
            }
        }
    };

    cargarLibros(){
        // this.libro={titulo:"La Rebelion de las ratas",autor:"Fernando Soto Aparicio",genero:"Novela", 
        // numEdicion:1,uniExistentes:3,uniDisponibles:3, resena:"Cuenta la historia de Timbalí, un pueblo ficticio que el escritor ubica en el departamento de Boyacá y que se encuentra bajo el dominio de las multinacionales estadounidenses. Los acontecimientos que tienen lugar en la novela ocurren durante el mes de febrero en un año no especificado, y pretenden mostrar al lector cómo la industria extranjera se aprovecha de las circunstancias económicas de las familias campesinas y, al mismo tiempo, deja ver la manera en la que el sentimiento revolucionario, en busca de justicia, enardece los corazones humanos y se aprecia la realidad de la explotación."
        // , imagen:"assets/images/libros/el-castillo.jpg"};
        this._libro.getLibro().subscribe(respuesta => {
            this.libros=respuesta["LIBRO"];
            this.cargarGeneros();
            // console.log(this.libros);
        });
    }  
}
