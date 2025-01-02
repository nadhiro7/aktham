import { Component, input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  value = input<string>('');
  text = input<string>('');
  icon = input<string>('');
}
