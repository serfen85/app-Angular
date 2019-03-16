import { Component, OnInit } from '@angular/core';
import { Cuento } from '../../models/cuento';
import { CuentoTarjetaService } from '../cuento-tarjeta/cuento-tarjeta.service';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css'],
  providers: [CuentoTarjetaService]
})
export class TarjetasComponent implements OnInit {

 // public lista: Cuento[];


  constructor(private ct: CuentoTarjetaService) {

    //this.lista= this.ct.getList();
  }

  ngOnInit() {

   // this.lista = this.ct.getList();
  }


  public agregar() {
    this.ct.add(
      {
        id:999,
        titulo:'blanca nieves',
        autor:'grunion',
        categoria_id:1,
        resenia:"un ucento contado"
      }


    );


    //this.lista=this.ct.getList();
  }


  public eliminar()
  {
    this.ct.remove(0);
  //  this.lista=this.ct.getList();
  }

}
