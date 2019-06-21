import {Pipe,PipeTransform}from '@angular/core';


@Pipe(
    {
        name:'nombre'
    }
)

export class BusquedaPipe implements PipeTransform
{
    public transform ( value , Palabra : String)
    {
        if(!value){return;}
        if(!Palabra){return value;}
        var busqueda = String(Palabra)
        busqueda = busqueda.toLocaleUpperCase();
        
        return value.filter( (item)=>
        {  
            
            return JSON.stringify(String(item.titulo)).toLocaleUpperCase().includes(String(busqueda));
        }
        )

    }
    
}