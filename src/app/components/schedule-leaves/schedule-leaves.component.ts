import { NgFor, NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-schedule-leaves',
  imports: [NgStyle, NgFor],
  templateUrl: './schedule-leaves.component.html',
  styleUrl: './schedule-leaves.component.css'
})
export class ScheduleLeavesComponent {
  months = [
    { name: 'Jan', color: '#662C91' },
    { name: 'Feb', color: '#662C9180' },
    { name: 'Mar', color: '#662C91' },
    { name: 'Apr', color: '#662C914D' },
    { name: 'May', color: '#662C9180' },
    { name: 'Jun', color: '#662C914D' },
    { name: 'Jul', color: '#662C91B2' },
    { name: 'Aug', color: '#662C9180' },
    { name: 'Sep', color: '#662C9180' },
    { name: 'Oct', color: '#662C914D' },
    { name: 'Nov', color: '#662C91' },
    { name: 'Dec', color: '#662C91CC' },
  ];
  firstSixMonths = this.months.slice(0, 6);
  lastSixMonths = this.months.slice(6, 12);
}
