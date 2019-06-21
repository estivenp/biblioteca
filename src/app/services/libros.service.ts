import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';

import { Libro } from '../models/libro';

@Injectable({
    providedIn: 'root'
  })
  export class LibroService {
  
    private url:string;//direccion para obtener materias o agregar una
    private  libro:Libro;//Referencia de la materia que se quiera actualizar
    private pagina:number;//Indica en que pagina estoy(listar=1,agregar=2)
    private existentes:number[];
  
    constructor(/*private _http:Http,*/private _http:HttpClient) { 
      this.url="https://api.myjson.com/bins/11pcld";
      this.pagina=1;
      this.existentes=[0,1,2,2,2,4,2,2,1,0,3,2];
      // localStorage.setItem("Disponibles", "0,1,2,2,2,4,2,2,1,0,3,2");
    }
  
  
    getLibro(){
      return this._http.get<Libro[]>(this.url);
    }

    setLibros(lib){
      this.setLibros=lib;
    }

    getLibroAct():Libro{
      return this.libro;
    }
    setLibroAct(lib:Libro){
      this.libro=lib;
    }

    getPagina(){
      return this.pagina;
    }
    setPagina(pag){
      this.pagina=pag;
    }
    setExistentes(ex){
      this.existentes=ex;
    }
    getExistentes(){
      return this.existentes;
    }

  }
  