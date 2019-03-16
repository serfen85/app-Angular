import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observador',
  templateUrl: './observador.component.html',
  styleUrls: ['./observador.component.scss']
})
export class ObservadorComponent implements OnInit {


  private data$: Observable < number > ;

  private loading: boolean= true;

	 private lista$: Observable < number[]> ;

	private lista:  number[];


  constructor() {

  }

  ngOnInit() {

	this.data$ = new Observable(observer => {

  	setTimeout(() => {
 		//  console.log("1");
    	observer.next(42);
  	}, 2000 );


  	setTimeout(() => {

 		//  console.log("2");

    	observer.next(43);
    }, 3000);
    
    
  //  observer.error("este es un error");

  	setTimeout(() => {

 		//  console.log("3");
    	observer.complete();
 		 this.loading=false;

  	}, 3500);
	});



 this.lista$ = new Observable(observer => {

	 let lista: number[]=[];

  	setTimeout(() => {
 		 lista.push(42)
    	observer.next(lista);
    }, 3000 );
    


  	setTimeout(() => {
 		 lista.push(43)
    	observer.next(lista);
  	}, 6000);

  	setTimeout(() => {

    	observer.complete();
 		 this.loading=false;

  	}, 9000);
  });
  
  this.escuchar();

  }


  public escuchar()
  {
    this.lista=[];

    this.data$.subscribe(
      value=>{ 
        console.log(value)
        this.lista.push(value) 
      },
      error=> {
        console.log(error)
      },
      ()=> 
      {
        console.log("finish")
      }
    );
  }
}