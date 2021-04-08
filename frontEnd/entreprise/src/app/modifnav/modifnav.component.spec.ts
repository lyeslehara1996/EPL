import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifnavComponent } from './modifnav.component';

describe('ModifnavComponent', () => {
  let component: ModifnavComponent;
  let fixture: ComponentFixture<ModifnavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifnavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
