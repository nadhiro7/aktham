import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartementChartComponent } from './departement-chart.component';

describe('DepartementChartComponent', () => {
  let component: DepartementChartComponent;
  let fixture: ComponentFixture<DepartementChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DepartementChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepartementChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
