import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from "@angular/router"
//import { ToastService } from 'ng-uikit-pro-standard';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formLogin: FormGroup;
  public error: string;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.formLogin = new FormGroup(
      {
        username: new FormControl(),
        password: new FormControl()
      }
    )
  }

  public login() {    
    let item = this.formLogin.value;
    let login: any = this.auth.login(item.username, item.password);
    login.then(respuesta=>
    {
      console.log(respuesta);
      this.router.navigate(['/tarjetas']);   
    }).catch(error => 
    {
      this.error=error.message;
    });

    
/*
    if (login.status == 'success') {    
      this.router.navigate(['/tarjetas']);
    }
    else {
      this.error = login.message;
    }*/

  }



}
