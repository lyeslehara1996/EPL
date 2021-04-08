import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListnavComponent } from './listnav.component';

describe('ListnavComponent', () => {
  let component: ListnavComponent;
  let fixture: ComponentFixture<ListnavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListnavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
