import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-presentacion-modulo',
  templateUrl: './presentacion-modulo.component.html',
  styleUrl: './presentacion-modulo.component.css'
})
export class PresentacionModuloComponent {
  @Input() titulo: string = '';
  @Input() descripcion: string = '';
}
