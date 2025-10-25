import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObservarFenomenoComponent } from './plantillas/observar-fenomeno/observar-fenomeno.component';
import { ExplicarObservadoComponent } from './plantillas/explicar-observado/explicar-observado.component';
import { EntenderFenonemoComponent } from './plantillas/entender-fenonemo/entender-fenonemo.component';
import { HoraExplorarComponent } from './plantillas/hora-explorar/hora-explorar.component';
import { PruebaConocimientosComponent } from './plantillas/prueba-conocimientos/prueba-conocimientos.component';
import { EncuestaSatisfaccionComponent } from './plantillas/encuesta-satisfaccion/encuesta-satisfaccion.component';
import { PresentacionModuloComponent } from './plantillas/presentacion-modulo/presentacion-modulo.component';
import { AppRoutingModule } from "../app-routing.module";
import { ModalComponent } from '../feature/shared/plantillas/modal/modal.component';

@NgModule({
	declarations: [

		ObservarFenomenoComponent,
		ExplicarObservadoComponent,
		EntenderFenonemoComponent,
		HoraExplorarComponent,
		PruebaConocimientosComponent,
		EncuestaSatisfaccionComponent,
  		PresentacionModuloComponent
		,ModalComponent
	],
	imports: [
    CommonModule,
    AppRoutingModule
],
	exports: [
		ObservarFenomenoComponent,
		ExplicarObservadoComponent,
		EntenderFenonemoComponent,
		HoraExplorarComponent,
		PruebaConocimientosComponent,
		EncuestaSatisfaccionComponent,
		PresentacionModuloComponent,
		ModalComponent
	]
})
export class SharedModule {}
