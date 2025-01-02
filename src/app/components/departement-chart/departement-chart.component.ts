import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-departement-chart',
  imports: [NgClass, NgFor],
  templateUrl: './departement-chart.component.html',
  styleUrl: './departement-chart.component.css'
})
export class DepartementChartComponent {
  departments = [
    { name: 'HR', scheduled: 60, used: 40 },
    { name: 'IT', scheduled: 30, used: 70 },
    { name: 'Legal', scheduled: 50, used: 50 },
    { name: 'Marketing', scheduled: 20, used: 80 }
  ];
  yMarkers = [20, 40, 60, 80, 100];
}
