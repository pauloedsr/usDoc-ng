import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrototipoModalComponent } from './prototipo-modal.component';

describe('PrototipoModalComponent', () => {
  let component: PrototipoModalComponent;
  let fixture: ComponentFixture<PrototipoModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrototipoModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrototipoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
