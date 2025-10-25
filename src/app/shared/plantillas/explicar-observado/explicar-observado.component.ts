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

  titulo: string | undefined;
  descripcion: string | undefined;
  celulas: any;
  imagen?: string;
  textoBoton?: string;
  creditos?: string;

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
        creditos: moduleData.creditos
      };
      this.layoutType = this.data.tipo;
    }
  }

  onButtonClick() {
    if (this.currentModule === 'modulo-1') {
      this.router.navigate(['/modulo-1/entender-fenomeno']);
    }
  }
}
