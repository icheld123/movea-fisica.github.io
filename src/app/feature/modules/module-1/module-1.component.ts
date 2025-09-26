import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-module-1',
  templateUrl: './module-1.component.html',
  styleUrl: './module-1.component.css'
})
export class Module1Component {
  @Output() titulo: string = 'Módulo 1: Cinemática';
  @Output() descripcion: string = 'En este módulo, exploraremos los conceptos fundamentales de la cinemática, incluyendo el movimiento rectilíneo uniforme (MRU) y el movimiento rectilíneo uniformemente acelerado (MRUA). A través de explicaciones teóricas, ejemplos prácticos y ejercicios interactivos, los estudiantes aprenderán a describir y analizar el movimiento de los objetos en una dimensión. Al finalizar este módulo, los estudiantes estarán equipados con las habilidades necesarias para resolver problemas básicos de cinemática y comprender cómo se aplican estos conceptos en situaciones del mundo real.';

}
