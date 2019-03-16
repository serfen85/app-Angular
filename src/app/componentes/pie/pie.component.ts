import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {


  public palabrasLeidas: number=32.64656544654;

  @Input('leidas') cantidadPalabrasLeidas : number;


public a: any= {
  nombre:'cesar',
  apellido:'cas'
}


  constructor() { }

  ngOnInit() {
  }

}
