import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonModule,MenubarModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  items: MenuItem[] | undefined;
  title = 'workAdm';
  isDarkMode = false;

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    const body = document.body;

    if (this.isDarkMode) {
      body.classList.add('dark-theme');
    } else {
      body.classList.remove('dark-theme');
    }
  }

  ngOnInit(): void {
    this.items = [
      {
          label: 'Home',
          icon: 'pi pi-home',
          routerLink: '/app-home',
      },
      {
          label: 'About Us',
          icon: 'pi pi-user',
          routerLink:'/app-aboutus',
      },
      // {
      //     label: 'Projects',
      //     icon: 'pi pi-search',
                
      // },
      {
          label: 'Contact',
          icon: 'pi pi-envelope',
          badge: '3',
          routerLink:'/app-contact'
      }
  ];
  }
 
}
