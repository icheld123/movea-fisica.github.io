import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentacionModuloComponent } from './presentacion-modulo.component';

describe('PresentacionModuloComponent', () => {
  let component: PresentacionModuloComponent;
  let fixture: ComponentFixture<PresentacionModuloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PresentacionModuloComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresentacionModuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
