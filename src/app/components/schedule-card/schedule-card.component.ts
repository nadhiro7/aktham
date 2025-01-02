import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-schedule-card',
  imports: [],
  templateUrl: './schedule-card.component.html',
  styleUrl: './schedule-card.component.css'
})
export class ScheduleCardComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    this.drawDoughnutChart();
  }

  drawDoughnutChart(): void {
    const canvas = document.getElementById('doughnutChart') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');

    if (ctx) {
      // Data for the doughnut chart
      const data = [490, 360];
      // const labels = ['Category A', 'Category B', 'Category C'];
      const colors = ['#662C91', '#5C69A0'];

      // Calculate the total sum of the data
      const total = data.reduce((acc, value) => acc + value, 0);

      // Draw the doughnut chart slices
      let startAngle = 0;
      data.forEach((value, index) => {
        const sliceAngle = (value / total) * 2 * Math.PI;

        // Draw each slice
        ctx.beginPath();
        ctx.moveTo(canvas.width / 2, canvas.height / 2);
        ctx.arc(
          canvas.width / 2,
          canvas.height / 2,
          Math.min(canvas.width / 2, canvas.height / 2),
          startAngle,
          startAngle + sliceAngle
        );
        ctx.closePath();

        // Fill the slice
        ctx.fillStyle = colors[index];
        ctx.fill();

        startAngle += sliceAngle;
      });

      // Draw the inner circle to create the doughnut hole
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const radius = Math.min(canvas.width / 2, canvas.height / 2) * 0.7; // Adjust the hole size (70% of outer radius)

      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
      ctx.fillStyle = '#FFFFFF'; // Background color to mimic transparency
      ctx.fill();

      // Draw labels (optional)
      startAngle = 0;
      data.forEach((value, index) => {
        const sliceAngle = (value / total) * 2 * Math.PI;
        const textX =
          canvas.width / 2 +
          (Math.min(canvas.width / 2, canvas.height / 2) / 1.5) *
          Math.cos(startAngle + sliceAngle / 2);
        const textY =
          canvas.height / 2 +
          (Math.min(canvas.width / 2, canvas.height / 2) / 1.5) *
          Math.sin(startAngle + sliceAngle / 2);
        ctx.fillStyle = '#000';
        ctx.font = '14px Arial';
        ctx.textAlign = 'center';
        // ctx.fillText(labels[index], textX, textY);

        startAngle += sliceAngle;
      });
    }
  }
}