import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveUsedComponent } from './leave-used.component';

describe('LeaveUsedComponent', () => {
  let component: LeaveUsedComponent;
  let fixture: ComponentFixture<LeaveUsedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeaveUsedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeaveUsedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
