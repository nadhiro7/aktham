import { Component, input } from '@angular/core';
import { LinkActiveDirective } from '../../directives/link-active.directive';

@Component({
  selector: 'app-side-bar-link',
  imports: [LinkActiveDirective],
  templateUrl: './side-bar-link.component.html',
  styleUrl: './side-bar-link.component.css'
})
export class SideBarLinkComponent {
  name = input('');
  url = input('');
  isActive = input(true);
  icon = input('');
}
