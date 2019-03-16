import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {autores} from '../../data/autores';
import {Autor} from '../../models/autor';
import { AutoresService } from '../../services/autores.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-autor',
  templateUrl: './autor.component.html',
  styleUrls: ['./autor.component.css'],
  providers:[AutoresService]
})
export class AutorComponent implements OnInit {
  public id:string;  

  public listaAutores: Autor[]=autores;
  public autor:Autor;

  constructor(private ar:ActivatedRoute, private au:AutoresService) { }

  ngOnInit() {
    this.id= this.ar.snapshot.paramMap.get('id');

    let id_number:string=this.id;

    this.au.getAutor(id_number).subscribe(respuesta=>
    {
      this.autor=respuesta;
      this.autor.id=id_number;
    });
    
    // this.autor=this.listaAutores.find(a=>
    //   {
    //     return a.id==id_number
    //   }
    //);
  }

}
