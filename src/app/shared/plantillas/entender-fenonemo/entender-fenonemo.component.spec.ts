import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntenderFenonemoComponent } from './entender-fenonemo.component';

describe('EntenderFenonemoComponent', () => {
  let component: EntenderFenonemoComponent;
  let fixture: ComponentFixture<EntenderFenonemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EntenderFenonemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntenderFenonemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
