import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifieroprComponent } from './modifieropr.component';

describe('ModifieroprComponent', () => {
  let component: ModifieroprComponent;
  let fixture: ComponentFixture<ModifieroprComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifieroprComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifieroprComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
