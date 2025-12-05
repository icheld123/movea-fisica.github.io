import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModuleStateService } from '../../../core/services/module-state.service';
import { Subscription } from 'rxjs';
import { MODULO1_DATA } from '../../../feature/modules/module-1/data_modulo_uno.';
import { MODULO2_DATA } from '../../../feature/modules/module-2/data';
import { MODULO3_DATA } from '../../../feature/modules/module-3/data';

interface horaAprenderData {
  titulo: string;
  descripcion: string;
  simulaciones: simulaciones[];
}
interface simulaciones {
  titulo?: string;
  descripcion?: string;
  enlace?: string;
}

@Component({
  selector: 'app-hora-explorar',
  templateUrl: './hora-explorar.component.html',
  styleUrl: './hora-explorar.component.css'
})
export class HoraExplorarComponent {
  currentModule: string | null = null;
  data: horaAprenderData | null = null;
  simulaciones: simulaciones[] | null = null;
  // modal state
  modalOpen = false;
  modalItem: simulaciones | null = null;
  private sub: Subscription | null = null;
  
  constructor(
    private moduleState: ModuleStateService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.sub = this.moduleState.selectedModule$.subscribe(mod => {
      const inferModule = () => {
        if (this.router.url.startsWith('/modulo-1')) return 'modulo-1';
        if (this.router.url.startsWith('/modulo-2')) return 'modulo-2';
        if (this.router.url.startsWith('/modulo-3')) return 'modulo-3';
        return null;
      };

      this.currentModule = mod ?? inferModule();

      this.loadModuleData();
    });
  }

  openModal(item: simulaciones) {
    this.modalItem = item;
    this.modalOpen = true;
  }

  closeModal() {
    this.modalOpen = false;
    this.modalItem = null;
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  private loadModuleData() {
    if (this.currentModule === 'modulo-1') {
      const moduleData = MODULO1_DATA.horaExplorar;
      this.data = {
        titulo: moduleData.titulo,
        descripcion: moduleData.descripcion,
        simulaciones: moduleData.simulaciones,
      };
    }
    if (this.currentModule === 'modulo-2') {
      const moduleData = MODULO2_DATA.horaExplorar;
      this.data = {
        titulo: moduleData.titulo,
        descripcion: moduleData.descripcion,
        simulaciones: moduleData.simulaciones,
      };
    }
    /*
    if (this.currentModule === 'modulo-3') {
      const moduleData = MODULO3_DATA.horaExplorar;
      this.data = {
        titulo: moduleData.titulo,
        descripcion: moduleData.descripcion,
        simulaciones: moduleData.simulaciones,
      };
    }   
    */
  }
}
