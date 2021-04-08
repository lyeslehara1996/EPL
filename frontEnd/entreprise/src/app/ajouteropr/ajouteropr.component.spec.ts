import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouteroprComponent } from './ajouteropr.component';

describe('AjouteroprComponent', () => {
  let component: AjouteroprComponent;
  let fixture: ComponentFixture<AjouteroprComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouteroprComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouteroprComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
