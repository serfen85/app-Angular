import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {

  @Input() tituloEncabezado:string;


  constructor() { }

  ngOnInit() {
    if (this.tituloEncabezado===undefined)
    {
      this.tituloEncabezado="Cuentos de disney";
    }
  }

}
