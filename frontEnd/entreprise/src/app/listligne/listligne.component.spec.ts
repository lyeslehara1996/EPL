import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListligneComponent } from './listligne.component';

describe('ListligneComponent', () => {
  let component: ListligneComponent;
  let fixture: ComponentFixture<ListligneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListligneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListligneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
