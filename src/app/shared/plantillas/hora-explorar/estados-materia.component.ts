import { Component } from '@angular/core';

@Component({
  selector: 'app-estados-materia',
  templateUrl: './estados-materia.component.html',
  styleUrls: ['./estados-materia.component.css']
})
export class EstadosMateriaComponent {
  // Reemplaza esta URL por la ruta real dentro de assets/modulo-1
  experimentUrl = 'assets/modulo-1/estados-de-la-materia/index.html';
  isModalOpen = false;

  openModal() {
    this.isModalOpen = true;
  }

  onModalClosed() {
    this.isModalOpen = false;
  }
}
