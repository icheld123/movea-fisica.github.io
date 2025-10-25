import { Component, OnDestroy, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { ModuleStateService } from '../../../core/services/module-state.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MODULO1_DATA } from '../../../feature/modules/module-1/data';

@Component({
  selector: 'app-observar-fenomeno',
  templateUrl: './observar-fenomeno.component.html',
  styleUrls: ['./observar-fenomeno.component.css']
})
export class ObservarFenomenoComponent implements OnInit, OnDestroy {
  @Input() data?: ObservacionData;
  @Input() backgroundImage?: string; 
  @Output() buttonClick = new EventEmitter<void>();

  titulo: string = '';
  descripcion: string = '';
  textoBoton: string = '';

  currentModule: string | null = null;
  backgroundStyle: { [key: string]: string } = {};

  private sub: Subscription | null = null;

  constructor(
    private moduleState: ModuleStateService, 
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.sub = this.moduleState.selectedModule$.subscribe(mod => {
      this.currentModule = mod ?? (this.router.url.startsWith('/modulo-1') ? 'modulo-1' : null);
      if (!this.data) {
        this.loadModuleData();
      } else {
        this.applyData(this.data);
      }
      this.updateBackground();
    });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  private updateBackground() {
    const bg = this.backgroundImage || this.data?.backgroundImage;
    if (bg) {
      this.backgroundStyle = {
        'background-image': `url('${bg}')`,
        'background-size': 'cover',
        'background-position': 'center',
        'min-height': '80vh'
      };
      return;
    }

    if (this.currentModule === 'modulo-1') {
      this.backgroundStyle = {
        'background-image': "url('/assets/modulo-1/brewer_dobson_realistic_temp.gif')",
        'background-size': 'cover',
        'background-position': 'center',
        'min-height': '90vh'
      };
    } else {
      this.backgroundStyle = {};
    }
  }

  onButtonClick() {
    this.buttonClick.emit();

    if (this.data?.route) {
      this.router.navigate([this.data.route]);
      return;
    }

    if (this.currentModule === 'modulo-1') {
      this.router.navigate(['/modulo-1/explicar-observado']);
    }
  }

  private loadModuleData() {
    if (this.currentModule === 'modulo-1') {
      const data = MODULO1_DATA.observarFenomeno;
      this.titulo = data.titulo;
      this.descripcion = data.descripcion;
      this.textoBoton = data.textoBoton;
    }
  }

  private applyData(d: ObservacionData) {
    this.titulo = d.titulo;
    this.descripcion = d.descripcion;
    this.textoBoton = d.textoBoton ?? '';
  }
}

export interface ObservacionData {
  titulo: string;
  descripcion: string;
  textoBoton?: string;
  route?: string;
  backgroundImage?: string;
}
