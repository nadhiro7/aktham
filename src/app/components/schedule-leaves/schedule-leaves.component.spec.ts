import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleLeavesComponent } from './schedule-leaves.component';

describe('ScheduleLeavesComponent', () => {
  let component: ScheduleLeavesComponent;
  let fixture: ComponentFixture<ScheduleLeavesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScheduleLeavesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScheduleLeavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
