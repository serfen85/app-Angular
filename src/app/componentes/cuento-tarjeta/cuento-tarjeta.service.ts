import { Injectable } from '@angular/core';
import {Cuento} from '../../models/cuento';
import {cuentos} from '../../data/cuentos';
@Injectable({
  providedIn: 'root'
})
export class CuentoTarjetaService {

public lista:Cuento[]= cuentos;


public status:string='Estado';


  constructor() { 

  }

    // public getList()
  // {
  //   return this.lista;
  // }


  public add(obj: Cuento)
  {
    this.lista.push(obj);    
    this.status='agregado';
  }



  public remove(index:number)
  {
    this.lista.splice(index,1);
    this.status='elimnado';
  }
}
