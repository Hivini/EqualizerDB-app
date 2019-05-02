import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertRegistersComponent } from './insert-registers.component';

describe('InsertRegistersComponent', () => {
  let component: InsertRegistersComponent;
  let fixture: ComponentFixture<InsertRegistersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertRegistersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertRegistersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
