import { Component, OnInit } from '@angular/core';
import { single } from 'rxjs';
import { SideBarLinkComponent } from "../side-bar-link/side-bar-link.component";

@Component({
  selector: 'app-sidebar',
  imports: [SideBarLinkComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {
  links = [
    { name: 'Dashboard', url: '/', isActive: true, icon: 'home-user.svg' },
    { name: 'Analysis', url: '/analysis', icon: 'analysis-icon.svg', isActive: false },
    { name: 'Smart View', url: '/smart-view', icon: 'sv.svg', isActive: false },
    { name: 'Report', url: '/report', icon: 'report.svg', isActive: false },
  ]
  constructor() { }
  ngOnInit(): void {
    const currentUrl = window.location.pathname;
    console.log(currentUrl)
    this.links.forEach(link => {
      if (link.url === currentUrl) {
        console.log(true)
        link.isActive = true;
      } else {
        console.log(false)
        link.isActive = false;
      }
    });
    console.log(this.links)
  }
}
