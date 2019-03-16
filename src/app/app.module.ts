import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './componentes/card/card.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { CuerpoComponent } from './componentes/cuerpo/cuerpo.component';
import { PieComponent } from './componentes/pie/pie.component';
import { TraduccionPipe } from './pipe/traduccion.pipe';
import { CuentosComponent } from './componentes/cuentos/cuentos.component';
import { CantidadpalabrasPipe } from './pipe/cantidadpalabras.pipe';
import { CategoriasComponent } from './componentes/categorias/categorias.component';
import { AutoresComponent } from './componentes/autores/autores.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ReactiveFormsModule } from '@angular/forms';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { CuentotarjetaComponent } from './componentes/cuentotarjeta/cuentotarjeta.component';
import { CuentoTarjetaComponent } from './componentes/cuento-tarjeta/cuento-tarjeta.component';
import { TarjetasComponent } from './componentes/tarjetas/tarjetas.component';
import { MenusComponent } from './componentes/menus/menus.component';
import { AutorComponent } from './componentes/autor/autor.component';
import { LoginComponent } from './componentes/login/login.component';

import { MDBBootstrapModule, } from 'angular-bootstrap-md';
import { ObservadorComponent } from './componentes/observador/observador.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';


export const firebase ={
   config : {
    apiKey: "AIzaSyApU3g4KHe_WRjJu41fWUujdK6ZO_0x2ag",
    authDomain: "app-angular-c779b.firebaseapp.com",
    databaseURL: "https://app-angular-c779b.firebaseio.com",
    projectId: "app-angular-c779b",
    storageBucket: "app-angular-c779b.appspot.com",
    messagingSenderId: "229656385554"
   }
};


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    EncabezadoComponent,
    CuerpoComponent,
    PieComponent,
    TraduccionPipe,
    CuentosComponent,
    CantidadpalabrasPipe,
    CategoriasComponent,
    AutoresComponent,
    CuentotarjetaComponent,
    CuentoTarjetaComponent,
    TarjetasComponent,
    MenusComponent,
    AutorComponent,
    LoginComponent,
    ObservadorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    TypeaheadModule.forRoot(),
    ReactiveFormsModule,
    
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    AngularFireModule.initializeApp(firebase.config),
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
