import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModuleStateService } from '../../../core/services/module-state.service';
import { Subscription } from 'rxjs';
import { MODULO1_DATA } from '../../../feature/modules/module-1/data';

interface EntenderData {
  titulo: string;
  descripcion: string;
  botonesModales: botones[];
}
interface botones {
  titulo?: string;
  descripcion?: string;
  imagen?: string;
  anterior?: string | null;
  siguiente?: string | null;
}


@Component({
  selector: 'app-entender-fenonemo',
  templateUrl: './entender-fenonemo.component.html',
  styleUrls: ['./entender-fenonemo.component.css']
})
export class EntenderFenonemoComponent {
  currentModule: string | null = null;
  data: any = null;
  modalOpen = false;
  modalItem: any = null;
  private sub: Subscription | null = null;

  // Nueva propiedad: pestaña activa
  activeTab: number = 1;
  tabs: any[] = [];
  
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
      const moduleData = MODULO1_DATA.entenderFenomeno;
      this.tabs = Object.values(moduleData);
      this.data = moduleData;
    }
  }

  selectTab(index: number) {
    this.activeTab = index;
  }
}