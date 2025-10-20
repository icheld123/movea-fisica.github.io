import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ModuleStateService {
  private _selectedModule = new BehaviorSubject<string | null>(null);
  selectedModule$ = this._selectedModule.asObservable();

  selectModule(id: string | null) {
    this._selectedModule.next(id);
  }
}
