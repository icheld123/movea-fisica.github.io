import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {INICIO} from './data_inicio';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  data: any = null;

  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {
      this.loadModuleData();
  }

  private loadModuleData() {
      const moduleData = INICIO.presentacion;
      let botonArray: any[] = [];
      if (Array.isArray(moduleData.boton)) {
        botonArray = moduleData.boton;
      } else if (moduleData.boton && typeof moduleData.boton === 'object') {
        botonArray = Object.values(moduleData.boton as any);
      }

      this.data = {
        titulo: moduleData.titulo,
        descripcion: moduleData.descripcion,
        boton: botonArray,
      };
  }

}
