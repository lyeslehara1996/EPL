import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterligneComponent } from './ajouterligne.component';

describe('AjouterligneComponent', () => {
  let component: AjouterligneComponent;
  let fixture: ComponentFixture<AjouterligneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterligneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterligneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
