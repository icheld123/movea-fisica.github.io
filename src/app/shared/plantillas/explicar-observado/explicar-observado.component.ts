import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ModuleStateService } from '../../../core/services/module-state.service';
import { MODULO1_DATA } from '../../../feature/modules/module-1/data_modulo_uno.';
import { MODULO2_DATA } from '../../../feature/modules/module-2/data';
import { MODULO3_DATA } from '../../../feature/modules/module-3/data';

interface BotonModal {
  titulo: string;
  descripcion: string;
  imagen?: string;
  anterior?: string | null;
  siguiente?: string | null;
}

@Component({
  selector: 'app-explicar-observado',
  templateUrl: './explicar-observado.component.html',
  styleUrls: ['./explicar-observado.component.css']
})
export class ExplicarObservadoComponent implements OnInit, OnDestroy {
  currentModule: string | null = null;
  sections: any[] = []; // ← Secciones dinámicas (1, 2, 3, ...)
  activeTabIndex: number = 0;

  // Estado de modales
  modalOpen = false;
  modalItem: BotonModal | null = null;

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

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  private loadModuleData() {
    if (this.currentModule === 'modulo-1') {
      const moduleData = MODULO1_DATA.explicarObservado;
      // Convertir las claves (1, 2, 3...) en un arreglo de secciones
      this.sections = Object.entries(moduleData).map(([key, value]) => ({
        id: key,
        ...value
      }));
    }
    if (this.currentModule === 'modulo-2') {
      const moduleData = MODULO2_DATA.explicarObservado;
      // Convertir las claves (1, 2, 3...) en un arreglo de secciones
      this.sections = Object.entries(moduleData).map(([key, value]) => ({
        id: key,
        ...value
      }));
    }
    /*
    if (this.currentModule === 'modulo-3') {
      const moduleData = MODULO3_DATA.explicarObservado;
      // Convertir las claves (1, 2, 3...) en un arreglo de secciones
      this.sections = Object.entries(moduleData).map(([key, value]) => ({
        id: key,
        ...value
      }));
    }
    */
  }

  /** Tabs */
  setActiveTab(index: number) {
    this.activeTabIndex = index;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  isActive(index: number): boolean {
    return this.activeTabIndex === index;
  }

  /** Modales */
  openModal(item: BotonModal) {
    this.modalItem = item;
    this.modalOpen = true;
  }

  closeModal() {
    this.modalItem = null;
    this.modalOpen = false;
  }

  goToNextModal() {
    if (!this.modalItem?.siguiente) return;
    const botones = this.getAllModales();
    const next = botones.find(b => this.slugify(b.titulo) === this.modalItem?.siguiente);
    if (next) this.modalItem = next;
  }

  goToPreviousModal() {
    if (!this.modalItem?.anterior) return;
    const botones = this.getAllModales();
    const prev = botones.find(b => this.slugify(b.titulo) === this.modalItem?.anterior);
    if (prev) this.modalItem = prev;
  }

  private getAllModales(): BotonModal[] {
    return this.sections
      .flatMap(s => s.modales ?? [])
      .flatMap((m: any) => m.botonesModales ?? []);
  }

  private slugify(s: string): string {
    return s
      .toLowerCase()
      .trim()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9\-]/g, '');
  }
}
