import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMembersFormComponent } from './add-members-form.component';

describe('AddMembersFormComponent', () => {
  let component: AddMembersFormComponent;
  let fixture: ComponentFixture<AddMembersFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMembersFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMembersFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
