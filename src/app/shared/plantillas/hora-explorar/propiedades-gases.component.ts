import { Component } from '@angular/core';

@Component({
  selector: 'app-propiedades-gases',
  templateUrl: './propiedades-gases.component.html',
  styleUrls: ['./propiedades-gases.component.css']
})
export class PropiedadesGasesComponent {
  // Reemplaza esta URL por la ruta real dentro de assets/modulo-1
  experimentUrl = 'assets/modulo-1/propiedades-de-los-gases/index.html';
  isModalOpen = false;

  openModal() { this.isModalOpen = true; }
  onModalClosed() { this.isModalOpen = false; }
}
