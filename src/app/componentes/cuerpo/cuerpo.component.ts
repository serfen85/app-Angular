import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { cuentos } from '../../data/cuentos';
import { Cuento } from '../../models/cuento';



@Component({
  selector: 'cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.css']
})
export class CuerpoComponent implements OnInit, OnChanges {

  public resenia: string = "el lobo se come a caperucita";
  public titulo: string = "lobo";

  @Input('aliascuentos') cuentos: Cuento[];
  @Output() reseniaLeida: EventEmitter<string> = new EventEmitter<string>();

  @Input('clicks') numClicksInput: number;
  @Output('clicksOut') clickOutput: EventEmitter<number> = new EventEmitter<number>();

  public contador: number;

  public cuentoActual: Cuento;

  estilo: any = {
    color: 'red'
  }

  //para inicializar
  constructor() {
    this.contador = 0;

  }

  ngOnInit() {
    this.cuentoActual = this.cuentos[this.contador];
  }

  public onClick(): void {

    this.numClicksInput = this.numClicksInput + 1;
    this.clickOutput.emit(this.numClicksInput);

    this.contador = this.contador + 1;

    if (this.contador == 4) {
      this.contador = 0;
    }

    this.cuentoActual = this.cuentos[this.contador];
    this.reseniaLeida.emit(this.cuentoActual.resenia);

    if (this.contador == 0) {
      this.estilo.color = 'green';
    }
    else if (this.contador == 1) {
      this.estilo.color = 'yellow';
    }
    else if (this.contador == 2) {
      this.estilo.color = 'blue';
    }
    else if (this.contador == 3) {
      this.estilo.color = 'pink';
    }



  }

  public esPrimerCuento(titulo: string): boolean {
    if (titulo.toUpperCase() == 'TITULO 2') {
      return true;
    }

    return false;
  }


  public esTercerCuento(titulo: string): boolean {
    if (titulo.toUpperCase() == 'TITULO 3') {
      return true;
    }

    return false;
  }

  ngOnChanges(changes: SimpleChanges) {
    for (let propName in changes) {
      let chng = changes[propName];
      let cur = JSON.stringify(chng.currentValue);
      let prev = JSON.stringify(chng.previousValue);

      console.log("propName",propName)
      console.log("cur",cur)
      console.log("prev",prev)
    }
  }

}
