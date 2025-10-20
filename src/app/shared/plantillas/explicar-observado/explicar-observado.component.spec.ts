import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplicarObservadoComponent } from './explicar-observado.component';

describe('ExplicarObservadoComponent', () => {
  let component: ExplicarObservadoComponent;
  let fixture: ComponentFixture<ExplicarObservadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExplicarObservadoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExplicarObservadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
