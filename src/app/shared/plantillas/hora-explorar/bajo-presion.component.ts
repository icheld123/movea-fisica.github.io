import { Component } from '@angular/core';

@Component({
  selector: 'app-bajo-presion',
  templateUrl: './bajo-presion.component.html',
  styleUrls: ['./bajo-presion.component.css']
})
export class BajoPresionComponent {
  // Reemplaza esta URL por la ruta real dentro de assets/modulo-1
  experimentUrl = 'assets/modulo-1/bajo-presion/index.html';
  isModalOpen = false;

  openModal() { this.isModalOpen = true; }
  onModalClosed() { this.isModalOpen = false; }
}
