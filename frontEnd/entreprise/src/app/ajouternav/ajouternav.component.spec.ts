import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouternavComponent } from './ajouternav.component';

describe('AjouternavComponent', () => {
  let component: AjouternavComponent;
  let fixture: ComponentFixture<AjouternavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouternavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouternavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
