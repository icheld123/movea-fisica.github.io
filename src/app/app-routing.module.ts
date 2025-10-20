import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './feature/home/inicio/inicio.component';
import { Module1Component } from './feature/modules/module-1/module-1.component';
import { Module2Component } from './feature/modules/module-2/module-2.component';
import { Module3Component } from './feature/modules/module-3/module-3.component';
import { Module4Component } from './feature/modules/module-4/module-4.component';
import { ObservarFenomenoComponent } from './shared/plantillas/observar-fenomeno/observar-fenomeno.component'; 
import { ExplicarObservadoComponent } from './shared/plantillas/explicar-observado/explicar-observado.component';
import { EntenderFenonemoComponent } from './shared/plantillas/entender-fenonemo/entender-fenonemo.component';
import { HoraExplorarComponent } from './shared/plantillas/hora-explorar/hora-explorar.component';
import { PruebaConocimientosComponent } from './shared/plantillas/prueba-conocimientos/prueba-conocimientos.component';
import { EncuestaSatisfaccionComponent } from './shared/plantillas/encuesta-satisfaccion/encuesta-satisfaccion.component';
import { PresentacionModuloComponent } from './shared/plantillas/presentacion-modulo/presentacion-modulo.component';


const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },

  {
    path: 'modulo-1',
    component: Module1Component,
    children: [
      { path: 'presentacion-modulo', component: PresentacionModuloComponent },
      { path: 'observar-fenomeno', component: ObservarFenomenoComponent },
      { path: 'explicar-observado', component: ExplicarObservadoComponent },
      { path: 'entender-fenomeno', component: EntenderFenonemoComponent },
      { path: 'hora-explorar', component: HoraExplorarComponent },
      { path: 'prueba-conocimiento', component: PruebaConocimientosComponent },
      { path: 'encuesta-satisfaccion', component: EncuestaSatisfaccionComponent },
      { path: '', redirectTo: 'recursos', pathMatch: 'full' }
    ]
  },

  {
    path: 'modulo-2',
    component: Module2Component,
    children: [
      { path: 'presentacion-modulo', component: PresentacionModuloComponent },
      { path: 'observar-fenomeno', component: ObservarFenomenoComponent },
      { path: 'explicar-observado', component: ExplicarObservadoComponent },
      { path: 'entender-fenomeno', component: EntenderFenonemoComponent },
      { path: 'hora-explorar', component: HoraExplorarComponent },
      { path: 'prueba-conocimiento', component: PruebaConocimientosComponent },
      { path: 'encuesta-satisfaccion', component: EncuestaSatisfaccionComponent },
      { path: '', redirectTo: 'recursos', pathMatch: 'full' }

    ]
  },

  {
    path: 'modulo-3',
    component: Module3Component,
    children: [
      { path: 'presentacion-modulo', component: PresentacionModuloComponent },
      { path: 'observar-fenomeno', component: ObservarFenomenoComponent },
      { path: 'explicar-observado', component: ExplicarObservadoComponent },
      { path: 'entender-fenomeno', component: EntenderFenonemoComponent },
      { path: 'hora-explorar', component: HoraExplorarComponent },
      { path: 'prueba-conocimiento', component: PruebaConocimientosComponent },
      { path: 'encuesta-satisfaccion', component: EncuestaSatisfaccionComponent },
      { path: '', redirectTo: 'recursos', pathMatch: 'full' }
    ]
  },

  {
    path: 'modulo-4',
    component: Module4Component,
    children: [
      { path: 'presentacion-modulo', component: PresentacionModuloComponent },
      { path: 'observar-fenomeno', component: ObservarFenomenoComponent },
      { path: 'explicar-observado', component: ExplicarObservadoComponent },
      { path: 'entender-fenomeno', component: EntenderFenonemoComponent },
      { path: 'hora-explorar', component: HoraExplorarComponent },
      { path: 'prueba-conocimiento', component: PruebaConocimientosComponent },
      { path: 'encuesta-satisfaccion', component: EncuestaSatisfaccionComponent },
      { path: '', redirectTo: 'recursos', pathMatch: 'full' }
    ]
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
