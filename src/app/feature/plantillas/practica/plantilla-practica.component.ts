import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-practica-plantilla',
  templateUrl: './plantilla-practica.component.html',
  styleUrls: ['./plantilla-practica.component.css']
})
export class PracticaComponent {
  @Input() titulo: string = '';
  @Input() descripcion: string = '';
}
