import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutoresService {

  private url:string='https://app-angular-c779b.firebaseio.com/autores';
  constructor(private http: HttpClient) 
  { 

  }

  public buscar(nombre:string):Observable<any>
  {
    let endpoint:string= this.url + '.json?orderBy="nombre"&equalTo="' + nombre + '"';
    return this.http.get<any>(endpoint);
  }

  public getAutores(): Observable<any> {
    let endpoint:string= this.url + '.json';
    return this.http.get<any>(endpoint);
  }

  public createautor(autor: any):Observable<any>
  {
    let endpoint:string= this.url + '.json';
    return this.http.post<any>(endpoint,autor);
  }

  public updateautor(autor:any):Observable<any>
  {
    let endpoint:string= this.url + '/' + autor.id + '.json';
    return this.http.put(endpoint,autor);
  }

  public deleteautor(autor:any):Observable<any>
  {
    let endpoint:string= this.url + '/' + autor.id + '.json';
    return this.http.delete(endpoint);

  }

  
  public getAutor(id:string): Observable<any> {
    let endpoint:string= this.url + '/' + id + '.json';
    return this.http.get<any>(endpoint);
  }

}
