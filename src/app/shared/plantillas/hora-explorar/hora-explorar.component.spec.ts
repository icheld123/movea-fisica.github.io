import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoraExplorarComponent } from './hora-explorar.component';

describe('HoraExplorarComponent', () => {
  let component: HoraExplorarComponent;
  let fixture: ComponentFixture<HoraExplorarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HoraExplorarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoraExplorarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
