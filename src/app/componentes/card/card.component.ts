import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { cuentos } from '../../data/cuentos';
// import { Cuento, Categoria, Entity,Comentario } from '../../models';
import { Cuento } from '../../models/cuento';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit, OnChanges {

  public listadecuentos: Cuento[] = cuentos;
  public listadecuentoscategoria:Cuento[]=[];


  public atributos: string[] = [];

  public lan: string= 'EN';

  public numClicks:number=0;

  @Input('categoriaid') idcategoria:number;

  numPalabras:number=0;

  titulo:string='Cuentos adentro';

  public diccionario:any=
  {
    'titulo':'Titulo',
    'resenia':'Reseña',
    'autor':'Autor'
  }

  constructor() {
    for (let attr in this.listadecuentos[0]) {
          this.atributos.push(attr);
    }

  }

  ngOnInit() {
    
    for (let cuento of this.listadecuentos)
    {      
      if (cuento.categoria_id==this.idcategoria)
      {
          this.listadecuentoscategoria.push(cuento);
      }
    }
  }

  
  ngOnChanges(changes: SimpleChanges) {
    for (let propName in changes) {
      let chng = changes[propName];
      let cur = JSON.stringify(chng.currentValue);
      let prev = JSON.stringify(chng.previousValue);

      console.log("propName",propName)
      console.log("cur",cur)
      console.log("prev",prev)

      this.listadecuentoscategoria=[];


      for (let cuento of this.listadecuentos)
      {      
        if (cuento.categoria_id==Number(cur))
        {
            this.listadecuentoscategoria.push(cuento);
        }
      }


    }
  }

  public calculaPalabras(resenia: string)
  {
    this.numPalabras=this.numPalabras + resenia.split(' ').length;
  }


}
