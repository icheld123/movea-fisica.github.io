import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Module1Component } from './feature/modules/module-1/module-1.component';
import { Module2Component } from './feature/modules/module-2/module-2.component';
import { Module3Component } from './feature/modules/module-3/module-3.component';
import { Module4Component } from './feature/modules/module-4/module-4.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { InicioComponent } from './feature/home/inicio/inicio.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    Module1Component,
    Module2Component,
    Module3Component,
    Module4Component,
    NavbarComponent,
    InicioComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
