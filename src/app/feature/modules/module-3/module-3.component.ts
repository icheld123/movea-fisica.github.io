import { Component } from '@angular/core';
import { MODULO3_DATA } from './data';

@Component({
  selector: 'app-module-3',
  templateUrl: './module-3.component.html',
  styleUrl: './module-3.component.css'
})
export class Module3Component {
  data = MODULO3_DATA;
}
