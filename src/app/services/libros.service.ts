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
  
    constructor(/*private _http:Http,*/private _http:HttpClient) { 
      this.url="https://api.myjson.com/bins/11pcld";
      this.pagina=1;
    }
  
  
    getLibro(){
      return this._http.get<Libro[]>(this.url);
    }
    getLibroAct():Libro{
      return this.libro;
    }
    setLibroAct(lib:Libro){
      this.libro=lib;
    }

  }
  