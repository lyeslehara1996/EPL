import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupprimernavComponent } from './supprimernav.component';

describe('SupprimernavComponent', () => {
  let component: SupprimernavComponent;
  let fixture: ComponentFixture<SupprimernavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupprimernavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupprimernavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
