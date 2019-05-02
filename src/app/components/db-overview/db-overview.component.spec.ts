import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbOverviewComponent } from './db-overview.component';

describe('DbOverviewComponent', () => {
  let component: DbOverviewComponent;
  let fixture: ComponentFixture<DbOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
