import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-grade-chart',
  imports: [],
  templateUrl: './grade-chart.component.html',
  styleUrl: './grade-chart.component.css'
})
export class GradeChartComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    this.drawBarChart();
  }
  labels = ['Analyst', 'SR. Analyst', 'Manag'];
  drawBarChart(): void {
    const canvas = document.getElementById('barChart') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');

    if (ctx) {
      // Data for the chart
      const labels = ['Analyst', 'SR. Analyst', 'Manag'];
      const scheduledData = [15, 15, 15]; // Purple section
      const usedData = [64, 64, 64]; // Teal section
      const colors = { scheduled: '#36AFA8', used: '#662C91' }; // Chart colors

      // Canvas dimensions and configurations
      const chartWidth = canvas.width;
      const chartHeight = canvas.height;
      const barWidth = 22;
      const paddingBottom = 40;; // Space between bars
      const maxValue = 120; // Maximum value for percentage scaling
      const yOffset = 20; // Offset for labels below the chart

      // Loop through each label to draw the bars
      labels.forEach((label, index) => {
        const x =
          (chartWidth / labels.length) * index +
          (chartWidth / labels.length - barWidth) / 2;

        // Calculate heights
        const scheduledHeight = (usedData[index] / maxValue) * chartHeight;
        const usedHeight = (scheduledData[index] / maxValue) * chartHeight;

        // Draw "Used" section (Teal)
        ctx.fillStyle = colors.used;
        ctx.fillRect(
          x,
          chartHeight - usedHeight, // Start from the top of the "Used" section
          barWidth,
          usedHeight
        );

        // Draw "Scheduled" section (Purple)
        ctx.fillStyle = colors.scheduled;
        ctx.fillRect(
          x,
          chartHeight - usedHeight - scheduledHeight, // Start above "Used"
          barWidth,
          scheduledHeight
        );

        // Add labels
        ctx.fillStyle = '#000';
        ctx.font = '11px Inter';
        ctx.textAlign = 'center';
        ctx.fillText(label, x + barWidth / 2, chartHeight + yOffset + paddingBottom - 10);
      });

      // Add percentage markers on the y-axis
      const yMarkers = [0, 20, 40, 60, 80, 100];
      yMarkers.forEach((marker) => {
        const y = chartHeight - (marker / maxValue) * chartHeight;
        ctx.fillStyle = '#000';
        ctx.font = '9px Inter';
        ctx.textAlign = 'right';
        ctx.fillText(`${marker}%`, 25, y + 0); // Add a little offset for readability

        // Draw grid lines
        // ctx.strokeStyle = '#f00';
        // ctx.beginPath();
        // ctx.moveTo(40, y);
        // ctx.lineTo(chartWidth, y);
        // ctx.stroke();
      });
    }
  }
}