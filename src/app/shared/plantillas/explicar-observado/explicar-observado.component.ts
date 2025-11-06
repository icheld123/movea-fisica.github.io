import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ModuleStateService } from '../../../core/services/module-state.service';
import { MODULO1_DATA } from '../../../feature/modules/module-1/data';

interface ExplicacionData {
  titulo: string;
  descripcion: string;
  tipo: 'grid' | 'lista' | 'tabs' | 'simple';
  contenido: any;
  imagen?: string;
  creditos?: string;
  textoBoton?: string;
  modales?: Modal[];
}

interface Modal {
  titulo: string;
  descripcion: string;
  botonesModales: BotonModal[];
}

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
  data: ExplicacionData | null = null;
  currentModule: string | null = null;
  layoutType: string = 'simple';
  // view state
  showModales = false; // cuando true, mostramos solo la sección de modales

  titulo: string | undefined;
  descripcion: string | undefined;
  celulas: any;
  imagen?: string;
  textoBoton?: string;
  creditos?: string;

  botones: BotonModal[] | null = null;
  // modal state
  modalOpen = false;
  modalItem: BotonModal | null = null;
  private sub: Subscription | null = null;


  constructor(
    private moduleState: ModuleStateService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.sub = this.moduleState.selectedModule$.subscribe(mod => {
      this.currentModule = mod ?? (this.router.url.startsWith('/modulo-1') ? 'modulo-1' : null);
      this.loadModuleData();
    });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  openModal(item: BotonModal) {
    this.modalItem = item;
    this.modalOpen = true;
  }

  closeModal() {
    this.modalOpen = false;
    this.modalItem = null;
  }

  private loadModuleData() {
    if (this.currentModule === 'modulo-1') {
      const moduleData = MODULO1_DATA.explicarObservado;
      this.data = {
        titulo: moduleData.titulo,
        descripcion: moduleData.descripcion,
        tipo: 'grid',
        contenido: moduleData.celulas,
        imagen: moduleData.imagen,
        textoBoton: moduleData.textoBoton,
        creditos: moduleData.creditos,
        modales: moduleData.modales
      };
      this.layoutType = this.data.tipo;
    }
  }

  goToNextModal() {
    if (!this.modalItem?.siguiente || !this.data?.modales) return;
    const botones = this.data.modales.flatMap(m => m.botonesModales ?? []);
    const next = botones.find(b => this.slugify(b.titulo) === this.modalItem?.siguiente);
    if (next) this.modalItem = next;
  }

  goToPreviousModal() {
    if (!this.modalItem?.anterior || !this.data?.modales) return;
    const botones = this.data.modales.flatMap(m => m.botonesModales ?? []);
    const prev = botones.find(b => this.slugify(b.titulo) === this.modalItem?.anterior);
    if (prev) this.modalItem = prev;
  }

  onButtonClick() {
    if (this.showModales) return;
    this.showModales = true;

    setTimeout(() => {
      const el = document.getElementById('modales-section');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
  }

  goBack() {
    this.showModales = false;
    // opcional: hacer scroll hacia arriba suavemente
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }


  private slugify(s: string): string {
    return s
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9\-]/g, '');
  }
}
