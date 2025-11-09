import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MODULO1_DATA } from './data_modulo_uno.';
import { ModuleStateService } from '../../../core/services/module-state.service';

@Component({
  selector: 'app-module-1',
  templateUrl: './module-1.component.html',
  styleUrl: './module-1.component.css'
})
export class Module1Component implements OnInit, OnDestroy {
  data = MODULO1_DATA;
  presentacion: { titulo: string; descripcion: string; textoBoton: string } | null = null;
  showPresentacion = false;

  private sub: Subscription | null = null;

  constructor(private moduleState: ModuleStateService) {}

  ngOnInit() {
      this.presentacion = (this.data as any).presentacion ?? (this.data as any).recursos ?? null;

      this.sub = this.moduleState.selectedModule$.subscribe(selected => {
        this.showPresentacion = selected === 'modulo-1';
      });
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }
}
