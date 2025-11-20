import { Component, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { ModuleStateService } from '../../../core/services/module-state.service';
import { Router } from '@angular/router';
import { MODULO1_DATA } from '../../../feature/modules/module-1/data_modulo_uno.';
import { MODULO2_DATA } from '../../../feature/modules/module-2/data';
import { MODULO3_DATA } from '../../../feature/modules/module-3/data';

interface presentacionModulo {
    titulo: string,
    descripcion: string,
    boton: botones[]
}

interface botones{
    titulo: string,
    ruta: string
}

@Component({
  selector: 'app-presentacion-modulo',
  templateUrl: './presentacion-modulo.component.html',
  styleUrl: './presentacion-modulo.component.css'
})
export class PresentacionModuloComponent {
  @Input() titulo: string = '';
  @Input() descripcion: string = '';
  currentModule: string | null = null;
  data: presentacionModulo | null = null;
  botones: botones[] | null = null;
  // modal state
  modalOpen = false;
  private sub: Subscription | null = null;
  
  constructor(
    private moduleState: ModuleStateService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.sub = this.moduleState.selectedModule$.subscribe(mod => {
      this.currentModule = mod ?? (this.router.url.startsWith('/modulo-1') ? 'modulo-1' : null);
      this.currentModule = mod ?? (this.router.url.startsWith('/modulo-2') ? 'modulo-2' : null);
      this.currentModule = mod ?? (this.router.url.startsWith('/modulo-3') ? 'modulo-3' : null);

      this.loadModuleData();
    });
  }

  private loadModuleData() {
    if (this.currentModule === 'modulo-1') {
      const moduleData = MODULO1_DATA.presentacion;
      this.data = {
        titulo: moduleData.titulo,
        descripcion: moduleData.descripcion,
        boton: Array.isArray(moduleData.boton) ? moduleData.boton : [moduleData.boton],
      };
    }
    if (this.currentModule === 'modulo-2') {
      const moduleData = MODULO2_DATA.presentacion;
      this.data = {
        titulo: moduleData.titulo,
        descripcion: moduleData.descripcion,
        boton: Array.isArray(moduleData.boton) ? moduleData.boton : [moduleData.boton],
      };
    }
  }
}
