import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterconsComponent } from './ajoutercons.component';

describe('AjouterconsComponent', () => {
  let component: AjouterconsComponent;
  let fixture: ComponentFixture<AjouterconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterconsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
