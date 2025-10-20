import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservarFenomenoComponent } from './observar-fenomeno.component';

describe('ObservarFenomenoComponent', () => {
  let component: ObservarFenomenoComponent;
  let fixture: ComponentFixture<ObservarFenomenoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ObservarFenomenoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObservarFenomenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
