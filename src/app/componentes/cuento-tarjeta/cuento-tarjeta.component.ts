import { Component, OnInit,Input } from '@angular/core';
import { CuentoTarjetaService } from './cuento-tarjeta.service';
import {Cuento} from '../../models/cuento';


@Component({
  selector: 'app-cuento-tarjeta',
  templateUrl: './cuento-tarjeta.component.html',
  styleUrls: ['./cuento-tarjeta.component.css']
})
export class CuentoTarjetaComponent implements OnInit {

@Input('cuento') cuento:Cuento;
@Input('index') index:number;

  constructor(private ct: CuentoTarjetaService) { }

  ngOnInit() {
    this.ct.status = "Soy Hijo";
  }

  public cambiarStatus() {
    this.ct.status = "cambio status";
    //this.cuento.titulo='titulo 5';
    this.ct.lista[this.index].titulo='Titulo 5555';
  }


}
