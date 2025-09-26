import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-recursos-plantilla',
  templateUrl: './plantilla-recursos.component.html',
  styleUrls: ['./plantilla-recursos.component.css']
})
export class RecursosComponent {
  @Input() titulo: string = '';
  @Input() descripcion: string = '';
}
