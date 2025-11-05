import { Component } from '@angular/core';
import { ModuleStateService } from '../../services/module-state.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  expanded: string | null = null;
  isOpen = false; // Default to closed
  
  constructor(private moduleState: ModuleStateService) {}
  menu = [
    {
      id: 'inicio',
      label: 'Inicio',
    },
    {
      id: 'modulo-1',
      label: 'Módulo 1',
      children: [
        { label: 'Presentación de módulo', path: '/modulo-1/presentacion-modulo' },
        { label: 'Observar fenómeno', path: '/modulo-1/observar-fenomeno' },
        { label: 'Explicar observado', path: '/modulo-1/explicar-observado' },
        { label: 'Entender fenómeno', path: '/modulo-1/entender-fenomeno' },
        { label: 'Hora explorar', path: '/modulo-1/hora-explorar' },
        { label: 'Prueba conocimiento', path: '/modulo-1/prueba-conocimiento' },
        { label: 'Encuesta satisfacción', path: '/modulo-1/encuesta-satisfaccion' },
      ]
    },
    {
      id: 'modulo-2',
      label: 'Módulo 2',
      children: [
        { label: 'Presentación de módulo', path: '/modulo-2/presentacion-modulo' },
        { label: 'Observar fenómeno', path: '/modulo-2/observar-fenomeno' },
        { label: 'Explicar observado', path: '/modulo-2/explicar-observado' },
        { label: 'Entender fenómeno', path: '/modulo-2/entender-fenomeno' },
        { label: 'Hora explorar', path: '/modulo-2/hora-explorar' },
        { label: 'Prueba conocimiento', path: '/modulo-2/prueba-conocimiento' },
        { label: 'Encuesta satisfacción', path: '/modulo-2/encuesta-satisfaccion' },
      ]
    },
    {
      id: 'modulo-3',
      label: 'Módulo 3',
      children: [
        { label: 'Presentación de módulo', path: '/modulo-3/presentacion-modulo' },
        { label: 'Observar fenómeno', path: '/modulo-3/observar-fenomeno' },
        { label: 'Explicar observado', path: '/modulo-3/explicar-observado' },
        { label: 'Entender fenómeno', path: '/modulo-3/entender-fenomeno' },
        { label: 'Hora explorar', path: '/modulo-3/hora-explorar' },
        { label: 'Prueba conocimiento', path: '/modulo-3/prueba-conocimiento' },
        { label: 'Encuesta satisfacción', path: '/modulo-3/encuesta-satisfaccion' },
      ]
    },
    {
      id: 'modulo-4',
      label: 'Módulo 4',
      children: [
        { label: 'Presentación de módulo', path: '/modulo-4/presentacion-modulo' },
        { label: 'Observar fenómeno', path: '/modulo-4/observar-fenomeno' },
        { label: 'Explicar observado', path: '/modulo-4/explicar-observado' },
        { label: 'Entender fenómeno', path: '/modulo-4/entender-fenomeno' },
        { label: 'Hora explorar', path: '/modulo-4/hora-explorar' },
        { label: 'Prueba conocimiento', path: '/modulo-4/prueba-conocimiento' },
        { label: 'Encuesta satisfacción', path: '/modulo-4/encuesta-satisfaccion' },
      ]
    }
  ];


  selectModule(moduleId: string) {
    this.moduleState.selectModule(moduleId);
    this.isOpen = true;
  }

  toggle(id: string) {
    this.expanded = this.expanded === id ? null : id;
    // notify other parts of the app which module was clicked
    this.moduleState.selectModule(this.expanded);
  }


}
