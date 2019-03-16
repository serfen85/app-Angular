import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TarjetasComponent} from './componentes/tarjetas/tarjetas.component';
import { MenusComponent} from './componentes/menus/menus.component';
import { CuentosComponent} from './componentes/cuentos/cuentos.component';
import { CategoriasComponent} from './componentes/categorias/categorias.component';
import { AutoresComponent} from './componentes/autores/autores.component';
import { AutorComponent} from './componentes/autor/autor.component';
import { LoginComponent} from './componentes/login/login.component';
import { ObservadorComponent} from './componentes/observador/observador.component';


const routes: Routes = [
  {
    path:'',
    component:MenusComponent,
    children:[
          {
            path:'',
            redirectTo:'/tarjetas',
            pathMatch:'full',
          },
          {
            path:'tarjetas',
            component:TarjetasComponent
          },
          {
            path:'cuentos',
            component:CuentosComponent
          },
          {
            path:'categorias',
            component:CategoriasComponent
          },
          {
            path:'observador',
            component:ObservadorComponent
          },          
          {
            path:'autores',
            component:AutoresComponent,
            children: [
              {
                path:':id',
                component:AutorComponent
              }
            ]
          }]
  },
  {
    path:'login',
    component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
