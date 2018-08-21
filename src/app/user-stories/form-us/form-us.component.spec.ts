import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormUsComponent } from './form-us.component';

describe('FormUsComponent', () => {
  let component: FormUsComponent;
  let fixture: ComponentFixture<FormUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
