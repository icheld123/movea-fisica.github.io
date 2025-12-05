import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Input() open = false;
  @Input() title?: string;
  @Input() content?: string;
  @Input() imagen?: string;
  @Input() video?: string;
  @Input() previous?: string | null;
  @Input() next?: string | null;
  safeUrl: SafeResourceUrl | null = null;
  @Input() set enlace(url: string | undefined) {
  this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url!);
  }

  @Output() close = new EventEmitter<void>();
  @Output() onNext = new EventEmitter<void>();
  @Output() onPrevious = new EventEmitter<void>();

  constructor(private sanitizer: DomSanitizer) {}
    ngOnChanges() {
    if (this.video) {
      this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.video);
    } else {
      this.safeUrl = null;
    }
  }

  onClose() {
    this.close.emit();
  }

  goNext() {
    if (this.next) {
      this.onNext.emit();
    }
  }

  goPrevious() {
    if (this.previous) {
      this.onPrevious.emit();
    }
  }
}
