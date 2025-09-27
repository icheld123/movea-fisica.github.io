import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './feature/home/inicio/inicio.component';
import { Module1Component } from './feature/modules/module-1/module-1.component';
import { Module2Component } from './feature/modules/module-2/module-2.component';
import { Module3Component } from './feature/modules/module-3/module-3.component';
import { Module4Component } from './feature/modules/module-4/module-4.component';
import { RecursosComponent } from './shared/plantillas/recursos/plantilla-recursos.component';
import { AprendizajeComponent } from './shared/plantillas/aprendizaje/plantilla-aprendizaje.component';
import { PracticaComponent } from './shared/plantillas/practica/plantilla-practica.component';
import { PruebaComponent } from './shared/plantillas/prueba/plantilla-prueba.component';


const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },

  {
    path: 'modulo-1',
    component: Module1Component,
    children: [
      { path: 'recursos', component: RecursosComponent },
      { path: 'aprendizaje', component: AprendizajeComponent },
      { path: 'practica', component: PracticaComponent },
      { path: 'prueba', component: PruebaComponent },
      { path: '', redirectTo: 'recursos', pathMatch: 'full' }
    ]
  },

  {
    path: 'modulo-2',
    component: Module2Component,
    children: [
      { path: 'recursos', component: RecursosComponent },
      { path: 'aprendizaje', component: AprendizajeComponent },
      { path: 'practica', component: PracticaComponent },
      { path: 'prueba', component: PruebaComponent },
      { path: '', redirectTo: 'recursos', pathMatch: 'full' }

    ]
  },

  {
    path: 'modulo-3',
    component: Module3Component,
    children: [
      { path: 'recursos', component: RecursosComponent },
      { path: 'aprendizaje', component: AprendizajeComponent },
      { path: 'practica', component: PracticaComponent },
      { path: 'prueba', component: PruebaComponent },
      { path: '', redirectTo: 'recursos', pathMatch: 'full' }
    ]
  },

  {
    path: 'modulo-4',
    component: Module4Component,
    children: [
      { path: 'recursos', component: RecursosComponent },
      { path: 'aprendizaje', component: AprendizajeComponent },
      { path: 'practica', component: PracticaComponent },
      { path: 'prueba', component: PruebaComponent },
      { path: '', redirectTo: 'recursos', pathMatch: 'full' }
    ]
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
