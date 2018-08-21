import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUsComponent } from './edit-us.component';

describe('EditUsComponent', () => {
  let component: EditUsComponent;
  let fixture: ComponentFixture<EditUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
