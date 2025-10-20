import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaConocimientosComponent } from './prueba-conocimientos.component';

describe('PruebaConocimientosComponent', () => {
  let component: PruebaConocimientosComponent;
  let fixture: ComponentFixture<PruebaConocimientosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PruebaConocimientosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PruebaConocimientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
