import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProjetoComponent } from './view-projeto.component';

describe('ViewProjetoComponent', () => {
  let component: ViewProjetoComponent;
  let fixture: ComponentFixture<ViewProjetoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewProjetoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewProjetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
