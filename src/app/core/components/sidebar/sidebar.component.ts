import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  expanded: string | null = null;
  menu = [
    {
      id: 'modulo-1',
      label: 'Módulo 1',
      children: [
        { label: 'Recursos', path: '/modulo-1/recursos' },
        { label: 'Aprendizaje', path: '/modulo-1/aprendizaje' },
        { label: 'Práctica', path: '/modulo-1/practica' },
        { label: 'Prueba', path: '/modulo-1/prueba' },
      ]
    },
    {
      id: 'modulo-2',
      label: 'Módulo 2',
      children: [
        { label: 'Recursos', path: '/modulo-2/recursos' },
        { label: 'Aprendizaje', path: '/modulo-2/aprendizaje' },
        { label: 'Práctica', path: '/modulo-2/practica' },
        { label: 'Prueba', path: '/modulo-2/prueba' },
      ]
    },
    {
      id: 'modulo-3',
      label: 'Módulo 3',
      children: [
        { label: 'Recursos', path: '/modulo-3/recursos' },
        { label: 'Aprendizaje', path: '/modulo-3/aprendizaje' },
        { label: 'Práctica', path: '/modulo-3/practica' },
        { label: 'Prueba', path: '/modulo-3/prueba' },
      ]
    },
    {
      id: 'modulo-4',
      label: 'Módulo 4',
      children: [
        { label: 'Recursos', path: '/modulo-4/recursos' },
        { label: 'Aprendizaje', path: '/modulo-4/aprendizaje' },
        { label: 'Práctica', path: '/modulo-4/practica' },
        { label: 'Prueba', path: '/modulo-4/prueba' },
      ]
    }
  ];


  toggle(id: string) {
    this.expanded = this.expanded === id ? null : id;
  }


}
