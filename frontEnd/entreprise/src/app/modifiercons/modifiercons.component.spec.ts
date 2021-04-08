import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierconsComponent } from './modifiercons.component';

describe('ModifierconsComponent', () => {
  let component: ModifierconsComponent;
  let fixture: ComponentFixture<ModifierconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierconsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
