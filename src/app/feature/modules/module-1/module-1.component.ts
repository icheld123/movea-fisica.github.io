import { Component, Output } from '@angular/core';
import { MODULO1_DATA } from './data';

@Component({
  selector: 'app-module-1',
  templateUrl: './module-1.component.html',
  styleUrl: './module-1.component.css'
})
export class Module1Component {
  data = MODULO1_DATA;
}
