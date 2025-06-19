import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { DataViewLayoutOptions, DataViewModule } from 'primeng/dataview';
import { MenubarModule } from 'primeng/menubar';
import { TabMenuModule } from 'primeng/tabmenu';
import { TagModule } from 'primeng/tag';
import { Products, Products1, ServiciopruebaService } from '../servicioprueba.service';
import { RatingModule } from 'primeng/rating';
import { CarouselModule } from 'primeng/carousel';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MenubarModule,CommonModule,RatingModule,CarouselModule,ButtonModule,BadgeModule,DataViewModule ,TagModule,CommonModule],
  
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
 products: Products [] = [];
 responsiveOptions: any[] | undefined;
 

 


 constructor(private servicioprueba1: ServiciopruebaService){}

 ItemSeleccionado(item: any){
  console.log(item, 'item')
  this.servicioprueba1.itemsCarritoBehSubject.next(item);
 }
 
  ngOnInit(): void {

    this.servicioprueba1.obtenerArreglo().subscribe((datos: Products[])=>{
      this.products = datos;
      console.log('mi arreglo', this.products)
    })



    this.responsiveOptions = [
      {
          breakpoint: '1199px',
          numVisible: 1,
          numScroll: 1
      },
      {
          breakpoint: '991px',
          numVisible: 2,
          numScroll: 1
      },
      {
          breakpoint: '767px',
          numVisible: 1,
          numScroll: 1
      }
  ];

    
  }

  getSeverity(status: string) {
  switch (status) {
    case 'INSTOCK':
      return 'success';
    case 'LOWSTOCK':
      return 'warning';
    case 'OUTOFSTOCK':
      return 'danger';
    default:
      return undefined;
  }
}





}
