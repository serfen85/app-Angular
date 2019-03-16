import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from "@angular/router"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthService]

  //  providers: [CuentoTarjetaService]  para aplicar a todos
})
export class AppComponent {
  title = 'app-angular';

  constructor(private as: AuthService, private router: Router) {
    if (!this.as.isActive()) {
      this.router.navigate(['/login']);
    }
  }

}
