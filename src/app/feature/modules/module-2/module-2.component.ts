import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MODULO2_DATA } from './data';
import { ModuleStateService } from '../../../core/services/module-state.service';

@Component({
  selector: 'app-module-2',
  templateUrl: './module-2.component.html',
  styleUrl: './module-2.component.css'
})
export class Module2Component implements OnInit, OnDestroy  {
  data = MODULO2_DATA;
  presentacion: { titulo: string; descripcion: string; textoBoton: string } | null = null;
  showPresentacion = false;

  private sub: Subscription | null = null;

  constructor(private moduleState: ModuleStateService) {}

  ngOnInit() {
      this.presentacion = (this.data as any).presentacion ?? (this.data as any).recursos ?? null;

      this.sub = this.moduleState.selectedModule$.subscribe(selected => {
        this.showPresentacion = selected === 'modulo-2';
      });
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }
}
