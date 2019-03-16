import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';



@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.css']
})
export class MenusComponent implements OnInit {

  constructor(public auth: AuthService) { }


  public toggle: boolean = true;

  ngOnInit() {
  }

  public onToggle() {
    this.toggle = !this.toggle;
  }

  // public logout() {
  //   this.auth.logout();
  // }

}
