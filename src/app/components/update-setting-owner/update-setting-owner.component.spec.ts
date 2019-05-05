import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSettingOwnerComponent } from './update-setting-owner.component';

describe('UpdateSettingOwnerComponent', () => {
  let component: UpdateSettingOwnerComponent;
  let fixture: ComponentFixture<UpdateSettingOwnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateSettingOwnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSettingOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
