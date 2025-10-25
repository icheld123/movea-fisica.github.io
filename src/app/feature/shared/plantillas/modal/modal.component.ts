import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Input() open = false;
  @Input() title?: string;
  @Input() content?: string; // can include simple HTML
  @Input() imagen?: string;
  @Input() previous?: string | null;
  @Input() next?: string | null;
  @Output() close = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }
}
