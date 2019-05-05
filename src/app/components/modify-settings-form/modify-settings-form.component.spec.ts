import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifySettingsFormComponent } from './modify-settings-form.component';

describe('ModifySettingsFormComponent', () => {
  let component: ModifySettingsFormComponent;
  let fixture: ComponentFixture<ModifySettingsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifySettingsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifySettingsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
