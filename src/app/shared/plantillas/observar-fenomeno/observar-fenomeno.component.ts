import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-observar-fenomeno',
  templateUrl: './observar-fenomeno.component.html',
  styleUrl: './observar-fenomeno.component.css'
})
export class ObservarFenomenoComponent {
  @Input() titulo: string = '';
  @Input() descripcion: string = '';
}
