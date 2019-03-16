import { Component, OnInit, TemplateRef } from '@angular/core';
import { autores } from '../../data/autores';
import { Autor } from '../../models/autor';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { estados } from '../../data/estados';
import { AutoresService } from '../../services/autores.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-autores',
  templateUrl: './autores.component.html',
  styleUrls: ['./autores.component.css'],
  providers: [AutoresService]
})
export class AutoresComponent implements OnInit {

  // public autores: Autor[] = autores;
  public autores: Autor[] = [];

  public todosautores: Autor[] = [];

  public estados:any[]=estados;
  public formAutor: FormGroup;
  validForm: boolean = true;
  public formBuscar:FormGroup= new FormGroup(
    {
      buscar: new FormControl()
    });


  public paises: any[] = [
    {
      codigo: 'MX',
      nombre: 'Mexico'
    }
    , {
      codigo: 'US',
      nombre: 'Estados Unidos'
    }
    , {
      codigo: 'CA',
      nombre: 'Canada'
    }

  ]

  modalRef: BsModalRef;
  constructor(private modalService: BsModalService, private fb: FormBuilder, public autorService:AutoresService) {
    this.formAutor = new FormGroup({
      id: new FormControl(null),
      nombre: new FormControl(null, [Validators.maxLength(15), Validators.required]),
      apellido: new FormControl(null),
      lectura: new FormControl('solo lectura'),
      vigente: new FormControl(true),
      pais:new FormControl('MX'),
      estado:new FormControl('NL'),

    })
  }

  ngOnInit() {
      
    this.getUsuarios();

    this.formBuscar.get('buscar').valueChanges.subscribe((respuesta)=>
    {
      //console.log(respuesta);
      this.autorService.buscar(respuesta).subscribe((res)=>
      {
        console.log(respuesta);

        if (respuesta=="")
        {
          this.autores=this.todosautores;
        }
        else
        {
          this.autores=[];
          for (let attr in res)
          {
            let autor: Autor=res[attr];
            autor.id=attr;
            this.autores.push(autor);
          }
        }        
      })
    }, (error)=>
    {
      
    },
      ()=>
    {
      console.log("completado");
    })

  }

  getUsuarios()
  {
      let autores$: Observable<any> = this.autorService.getAutores();

      autores$.subscribe(respuesta =>
      {
        for (let attr in respuesta)
        {
          let autor: Autor=respuesta[attr];
          autor.id=attr;
          this.autores.push(autor);
          this.todosautores.push(autor);
        }

      });
  }

  openModal(template: TemplateRef<any>) {


    this.resetearAutor();
    this.modalRef = this.modalService.show(template);
    // let lecturaControl =this.formAutor.get('lectura');
    // lecturaControl.enable=false;

    // this.formAutor.get('lectura').enable(false);
  }

  public Guardar() {
    this.validForm = this.formAutor.valid;
    if (this.validForm) {

      let autor: Autor = this.formAutor.value;

      if (autor.id == null) {


        //autor.id = this.autores.length + 1;


        this.autorService.createautor(autor).subscribe(respuesta=>
        {          
          autor.id=respuesta.name
          this.autores.push(autor);
        }, error =>{
          console.log(error)
        });
      }
      else {
        for (let i = 0; i < this.autores.length; i++) {
          if (this.autores[i].id == autor.id) {
          this.autorService.updateautor(autor).subscribe(
          respuesta=>
          {
            this.autores[i] = autor;
          });
           // 
          }
        }
      }
      //console.log("autor " ,autor);
      this.resetearAutor();
      this.modalRef.hide();
    }
  }

  public resetearAutor() {
    this.formAutor.reset();
    this.formAutor.patchValue(
      {
        vigente: true,
        pais:'MX',
        estado:'NL'
      }
    )
  }

  public EditarAutor(id: string, template: TemplateRef<any>) {


    let autor: Autor = this.autores.find((autor: Autor) => {
      return autor.id == id;
    });


    this.formAutor = this.fb.group(autor);

    // this.formAutor=this.fb.group({
    //   nombre:new FormControl(autor.nombre, Validators.required),
    //   apellido: new FormControl(autor.apellido),
    //   lectura: new FormControl('Solo Lextura'),
    //   id: new FormControl(autor.id),
    //   vigente:new FormControl(autor.vigente),
     // pais:new FormControl('MX')
     // estado:new FormControl('NL'),

    // })
    this.formAutor.get('nombre').setValidators([Validators.maxLength(15), Validators.required]);

    this.formAutor.addControl('lectura', new FormControl('Solo lectura'));
    this.modalRef = this.modalService.show(template);

  }


  /*************************
   * BORRADO
   *    *   *    *    */
  public idBorrar: number;
  public indexBorrar: number;


  public alertaborrado(id: number, template: TemplateRef<any>, index: number) {
    this.modalRef = this.modalService.show(template);
    this.idBorrar = id;
    this.indexBorrar = index;
  }

  public AceptarBorrado() {
    this.autorService.deleteautor(this.autores[this.indexBorrar]).subscribe(respuesta=>
    {
      this.autores.splice(this.indexBorrar, 1);
      this.idBorrar = null;
      this.indexBorrar = -1;
      this.modalRef.hide();
    });
  }

  public RechazarBorrado() {
    this.modalRef.hide();
    this.idBorrar = null;
    this.indexBorrar = -1;
  }

}
