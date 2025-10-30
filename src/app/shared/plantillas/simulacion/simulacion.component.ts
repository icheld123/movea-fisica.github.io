import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ModuleStateService } from '../../../core/services/module-state.service';
import { Subscription } from 'rxjs';
import { MODULO1_DATA } from '../../../feature/modules/module-1/data';

interface simulacion {
  titulo?: string;
  descripcion?: string;
  enlace?: string;
}

@Component({
  selector: 'app-simulacion',
  templateUrl: './simulacion.component.html',
  styleUrl: './simulacion.component.css'
})
export class SimulacionComponent {
  @Input() titulo?: string;
  @Input() descripcion?: string;
  private _enlace?: string;
  @Input() set enlace(url: string | undefined) {
    this._enlace = url;
    this.safeUrl = url ? this.sanitizer.bypassSecurityTrustResourceUrl(url) : null;
  }
  get enlace(): string | undefined {
    return this._enlace;
  }
  @Output() volver = new EventEmitter<void>();
  safeUrl: SafeResourceUrl | null = null;

  constructor(private sanitizer: DomSanitizer) {}

  volverClick() {
    this.volver.emit();
  }

}
