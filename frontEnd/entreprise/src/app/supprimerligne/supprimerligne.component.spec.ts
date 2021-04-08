import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupprimerligneComponent } from './supprimerligne.component';

describe('SupprimerligneComponent', () => {
  let component: SupprimerligneComponent;
  let fixture: ComponentFixture<SupprimerligneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupprimerligneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupprimerligneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
