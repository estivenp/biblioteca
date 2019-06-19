import {Pipe,PipeTransform}from '@angular/core';


@Pipe(
    {
        name:'genero'
    }
)

export class GerneroPipe implements PipeTransform
{
    public transform ( value , Palabra : String)
    {
        if(!value){return;}
        if(!Palabra){return value;}
        if(Palabra === "0"){return value;}
        var busqueda = String(Palabra)
        
        return value.filter( (item)=>
        {          
            return item.genero=== busqueda ? true : false;
        }
        )

    }
    
}