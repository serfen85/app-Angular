import { Component, OnInit } from '@angular/core';
import { cuentos } from '../../data/cuentos';
import { Cuento } from '../../models/cuento';

@Component({
  selector: 'cuentos',
  templateUrl: './cuentos.component.html',
  styleUrls: ['./cuentos.component.css']
})
export class CuentosComponent implements OnInit {

  public listadecuentos: Cuento[] = cuentos;
  public cuentoActual: Cuento;
  public contador: number;

  constructor() {
    this.contador = 0;
    this.cuentoActual = this.listadecuentos[this.contador];
  }

  ngOnInit() {
  }

}
