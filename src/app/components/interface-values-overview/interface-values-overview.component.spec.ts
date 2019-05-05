import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfaceValuesOverviewComponent } from './interface-values-overview.component';

describe('InterfaceValuesOverviewComponent', () => {
  let component: InterfaceValuesOverviewComponent;
  let fixture: ComponentFixture<InterfaceValuesOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterfaceValuesOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterfaceValuesOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
