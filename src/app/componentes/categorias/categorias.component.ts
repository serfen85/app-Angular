import { Component, OnInit } from '@angular/core';
import { categorias } from '../../data/categorias';
import { Categoria } from '../../models/categoria';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {


  
  public listadecategorias: Categoria[] = categorias;
  constructor() { }

  ngOnInit() {
  }

  public idcategoria:number=1;

  public onClick(id : number): void {
    // console.log(id);
    // alert('id ' + id);
    this.idcategoria=id;
  }

}
