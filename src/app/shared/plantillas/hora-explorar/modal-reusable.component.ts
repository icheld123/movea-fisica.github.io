import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-modal-reusable',
  templateUrl: './modal-reusable.component.html',
  styleUrls: ['./modal-reusable.component.css']
})
export class ModalReusableComponent implements OnChanges {
  @Input() open = false;
  @Input() url: string | null = null; // URL para el iframe
  @Output() closed = new EventEmitter<void>();

  visible = false; // control interno para animaciones

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['open']) {
      if (this.open) {
        // small delay to allow DOM render before showing (for transition)
        requestAnimationFrame(() => this.visible = true);
      } else {
        this.visible = false;
      }
    }
  }

  onClose() {
    // cerrar con animación
    this.visible = false;
    // esperar la transición antes de emitir cerrado
    setTimeout(() => this.closed.emit(), 220);
  }
}
