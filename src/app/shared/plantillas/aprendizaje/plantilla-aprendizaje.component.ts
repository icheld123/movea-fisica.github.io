import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-aprendizaje-plantilla',
  templateUrl: './plantilla-aprendizaje.component.html',
  styleUrls: ['./plantilla-aprendizaje.component.css']
})
export class AprendizajeComponent {
  @Input() titulo: string = '';
  @Input() descripcion: string = '';
}
