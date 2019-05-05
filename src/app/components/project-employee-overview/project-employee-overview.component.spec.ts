import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectEmployeeOverviewComponent } from './project-employee-overview.component';

describe('ProjectEmployeeOverviewComponent', () => {
  let component: ProjectEmployeeOverviewComponent;
  let fixture: ComponentFixture<ProjectEmployeeOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectEmployeeOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectEmployeeOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
