import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupprimeroprComponent } from './supprimeropr.component';

describe('SupprimeroprComponent', () => {
  let component: SupprimeroprComponent;
  let fixture: ComponentFixture<SupprimeroprComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupprimeroprComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupprimeroprComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
