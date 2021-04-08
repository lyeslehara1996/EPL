import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupprimerconsComponent } from './supprimercons.component';

describe('SupprimerconsComponent', () => {
  let component: SupprimerconsComponent;
  let fixture: ComponentFixture<SupprimerconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupprimerconsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupprimerconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
