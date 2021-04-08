import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierligneComponent } from './modifierligne.component';

describe('ModifierligneComponent', () => {
  let component: ModifierligneComponent;
  let fixture: ComponentFixture<ModifierligneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierligneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierligneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
