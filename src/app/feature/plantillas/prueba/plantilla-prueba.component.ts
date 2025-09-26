import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-prueba-plantilla',
  templateUrl: './plantilla-prueba.component.html',
  styleUrls: ['./plantilla-prueba.component.css']
})
export class PruebaComponent {
  @Input() titulo: string = '';
  @Input() descripcion: string = '';
}
