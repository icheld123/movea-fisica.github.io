import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AprendizajeComponent as PlantillaAprendizajeComponent } from '../feature/plantillas/aprendizaje/plantilla-aprendizaje.component';
import { PracticaComponent as PlantillaPracticaComponent } from '../feature/plantillas/practica/plantilla-practica.component';
import { PruebaComponent as PlantillaPruebaComponent } from '../feature/plantillas/prueba/plantilla-prueba.component';
import { RecursosComponent as PlantillaRecursosComponent } from '../feature/plantillas/recursos/plantilla-recursos.component';

@NgModule({
	declarations: [
		PlantillaAprendizajeComponent,
		PlantillaPracticaComponent,
		PlantillaPruebaComponent,
		PlantillaRecursosComponent
	],
	imports: [
		CommonModule
	],
	exports: [
		PlantillaAprendizajeComponent,
		PlantillaPracticaComponent,
		PlantillaPruebaComponent,
		PlantillaRecursosComponent
	]
})
export class SharedModule {}
