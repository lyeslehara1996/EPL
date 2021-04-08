import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListconsComponent } from './listcons.component';

describe('ListconsComponent', () => {
  let component: ListconsComponent;
  let fixture: ComponentFixture<ListconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListconsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
