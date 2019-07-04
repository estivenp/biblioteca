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
        this._libro.getLibro().subscribe(respuesta => {
            this.libros=respuesta["LIBRO"];
            this.cargarGeneros();
        });
    }  
}
