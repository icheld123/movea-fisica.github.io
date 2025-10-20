import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MODULO1_DATA } from './data';
import { ModuleStateService } from '../../../core/services/module-state.service';

@Component({
  selector: 'app-module-1',
  templateUrl: './module-1.component.html',
  styleUrl: './module-1.component.css'
})
export class Module1Component implements OnInit, OnDestroy {
  data = MODULO1_DATA;
  presentacion: { titulo: string; descripcion: string } | null = null;
  showPresentacion = false;

  private sub: Subscription | null = null;

  constructor(private moduleState: ModuleStateService) {}

  ngOnInit() {
    // choose a sensible default for the presentation (fallback to recursos)
  // support optional `presentacion` key in data; fall back to `recursos`
  this.presentacion = (this.data as any).presentacion ?? this.data.recursos ?? null;

    this.sub = this.moduleState.selectedModule$.subscribe(selected => {
      // the service emits ids like 'modulo-1' or null
      this.showPresentacion = selected === 'modulo-1';
    });
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }
}
