import { Component } from '@angular/core';
import { EmployerManagementComponent } from "../../components/employer-management/employer-management.component";
import { LeaveUsedComponent } from "../../components/leave-used/leave-used.component";
import { CardComponent } from "../../components/card/card.component";
import { ScheduleCardComponent } from "../../components/schedule-card/schedule-card.component";
import { ScheduleLeavesComponent } from "../../components/schedule-leaves/schedule-leaves.component";
import { GradeChartComponent } from "../../components/grade-chart/grade-chart.component";
import { DepartementChartComponent } from "../../components/departement-chart/departement-chart.component";
import { UsersTableComponent } from "../../components/users-table/users-table.component";

@Component({
  selector: 'app-dashboard',
  imports: [EmployerManagementComponent, LeaveUsedComponent, CardComponent, ScheduleCardComponent, ScheduleLeavesComponent, GradeChartComponent, DepartementChartComponent, UsersTableComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
