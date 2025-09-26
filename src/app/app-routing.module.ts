import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './feature/home/inicio/inicio.component';
import { Module1Component } from './feature/modules/module-1/module-1.component';
import { Module2Component } from './feature/modules/module-2/module-2.component';
import { Module3Component } from './feature/modules/module-3/module-3.component';
import { Module4Component } from './feature/modules/module-4/module-4.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'modulo-1', component: Module1Component },
  { path: 'modulo-2', component: Module2Component },
  { path: 'modulo-3', component: Module3Component },
  { path: 'modulo-4', component: Module4Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
