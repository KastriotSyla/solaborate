import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeptorDetailsComponent } from './deptor-details.component';

describe('DeptorDetailsComponent', () => {
  let component: DeptorDetailsComponent;
  let fixture: ComponentFixture<DeptorDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeptorDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeptorDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
