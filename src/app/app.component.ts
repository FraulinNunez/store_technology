import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { ToastModule } from 'primeng/toast';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddon, InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { ChipsModule } from 'primeng/chips';
import { ServiciopruebaService } from './servicioprueba.service';
import { map } from 'rxjs';
import { BadgeModule } from 'primeng/badge';
import { DataViewModule } from 'primeng/dataview';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,OverlayPanelModule, DataViewModule,BadgeModule,ChipsModule,InputGroupModule, InputGroupAddonModule,ButtonModule,MenubarModule,CommonModule,ToastModule,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [ConfirmationService, MessageService]
})
export class AppComponent implements OnInit {
  items: MenuItem[] | undefined;
  title = 'workAdm';
  isDarkMode = false;
  datosItems: any;
  numItems!: number | string;

  todositems: any[] = [];
  constructor(private miServicio: ServiciopruebaService,   private confirmationService: ConfirmationService, private messageService: MessageService) {}


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


  this.miServicio.itemsCarritoSubject.subscribe((d) => {
  if (d) {
    console.log(d, 'hola');

     if (Array.isArray(d)) {
      this.todositems.push(...d); 
      } else if (d) {
      this.todositems.push(d);    
      } 
      this.numItems = this.todositems.length;
      this.datosItems = this.todositems;

    console.log(this.todositems, 'aquí la construcción');
  }
});
  }
 
}
