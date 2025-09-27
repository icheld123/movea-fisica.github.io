import { Component } from '@angular/core';
import { MODULO2_DATA } from './data';

@Component({
  selector: 'app-module-2',
  templateUrl: './module-2.component.html',
  styleUrl: './module-2.component.css'
})
export class Module2Component {
  data = MODULO2_DATA;

}
