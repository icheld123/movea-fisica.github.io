import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObservarFenomenoComponent } from './plantillas/observar-fenomeno/observar-fenomeno.component';
import { ExplicarObservadoComponent } from './plantillas/explicar-observado/explicar-observado.component';
import { EntenderFenonemoComponent } from './plantillas/entender-fenonemo/entender-fenonemo.component';
import { HoraExplorarComponent } from './plantillas/hora-explorar/hora-explorar.component';
import { EstadosMateriaComponent } from './plantillas/hora-explorar/estados-materia.component';
import { PropiedadesGasesComponent } from './plantillas/hora-explorar/propiedades-gases.component';
import { BajoPresionComponent } from './plantillas/hora-explorar/bajo-presion.component';
import { ModalReusableComponent } from './plantillas/hora-explorar/modal-reusable.component';
import { SafeUrlPipe } from './plantillas/hora-explorar/safe-url.pipe';
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
		EstadosMateriaComponent,
		PropiedadesGasesComponent,
		BajoPresionComponent,
		ModalReusableComponent,
		SafeUrlPipe,
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
		EstadosMateriaComponent,
		PropiedadesGasesComponent,
		BajoPresionComponent,
		ModalReusableComponent,
		SafeUrlPipe,
		PruebaConocimientosComponent,
		EncuestaSatisfaccionComponent,
		PresentacionModuloComponent,
		ModalComponent
	]
})
export class SharedModule {}
