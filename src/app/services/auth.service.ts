import { Injectable } from '@angular/core';
import { Router } from "@angular/router"
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user:any;

  constructor(private router: Router,public afAuth: AngularFireAuth) { }

  public login(usuario:string, password:string) //: any
  {

    return this.afAuth.auth.signInWithEmailAndPassword(usuario,password);

/*
    if (usuario=='cccastillo' && password=='123456')
    {
      let api_key: number=Math.random();
      this.user=
      {
        api_key
      }


      localStorage.setItem('user',JSON.stringify(this.user));

      return{
        status:'success'
      }
    }
    else
    {
      
      return{
        status:'error',
        message:'el usuario o la contraseña está mal'
      }
    }
*/
  }

  public isActive()
  {
    this.user= JSON.parse( localStorage.getItem("user"));
    console.log('is active' , this.user);
    if (this.user == null)
    {
        return false;
    }
    else
    {
      return true;
    }
  }

  public logout()
  {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
