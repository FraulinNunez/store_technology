import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';



export interface Products{
  id: string,
  code: string,
  name: string,
  description: string,
  image: string,
  price: number,
  category: string,
  quantity: number,
  inventoryStatus: string,
  rating: number,
};



export interface Products1{
  id: string,
  code: string,
  name: string,
  description: string,
  image: string,
  price: number,
  category: string,
  quantity: number,
  inventoryStatus: string,
  rating: number,
};

@Injectable({
  providedIn: 'root'
})

export class ServiciopruebaService {

  constructor() { }

  itemsCarritoBehSubject = new BehaviorSubject<any[] | undefined>(undefined)
  itemsCarritoSubject = this.itemsCarritoBehSubject.asObservable()
  
   private baseHref = document.getElementsByTagName('base')[0].href;

private miArregloSubject = new BehaviorSubject<Products[]>([
  
  {
    id: '1000',
    code: 'zen-001',
    name: 'ZenBook Air X1',
    description: 'Ultraligera y potente, ideal para estudiantes y profesionales en movimiento. Incluye procesador Intel i5, 8GB RAM y SSD de 256GB.',
    image: `${this.baseHref}laptop1.png`,
    price: 65000,
    category: 'Laptops',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5
  },
  {
    id: '1001',
    code: 'fusion-002',
    name: 'FusionBook Pro 14',
    description: 'Equilibrio perfecto entre diseño y rendimiento con pantalla Full HD de 14", 8GB RAM y un estilo moderno para uso diario.',
    image: `${this.baseHref}laptop2.png`,
    price: 70000,
    category: 'Laptops',
    quantity: 15,
    inventoryStatus: 'INSTOCK',
    rating: 4
  },
  {
    id: '1002',
    code: 'ryzen-003',
    name: 'RyzenEdge S7',
    description: 'Con procesador AMD Ryzen 7 y 16GB RAM, esta laptop es perfecta para multitarea, programación y diseño gráfico.',
    image: `${this.baseHref}laptop3.png`,
    price: 72000,
    category: 'Laptops',
    quantity: 10,
    inventoryStatus: 'LOWINSTOCK',
    rating: 5
  },
  {
    id: '1003',
    code: 'gamer-004',
    name: 'GamerStorm GTX',
    description: 'Potencia brutal para gamers exigentes: tarjeta gráfica RTX, sistema de refrigeración avanzada y teclado RGB retroiluminado.',
    image: `${this.baseHref}laptop4.png`,
    price: 95000,
    category: 'Laptops',
    quantity: 5,
    inventoryStatus: 'OUTOFSTOCK',
    rating: 5
  },
  {
    id: '1004',
    code: 'media-005',
    name: 'MediaBook Flex 360',
    description: 'Versátil y confiable. Con pantalla táctil abatible 360°, ideal para streaming, estudios o trabajo desde casa.',
    image: `${this.baseHref}laptop1.png`,
    price: 67000,
    category: 'Laptops',
    quantity: 20,
    inventoryStatus: 'INSTOCK',
    rating: 4
  }


]);






private miArregloSubject1 = new BehaviorSubject<Products[]>([
  {
    id: '2000',
    code: 'lp-101',
    name: 'Laptop UltraSlim X1',
    description: 'Ultrabook súper ligero con pantalla de alta resolución y batería para todo el día.',
    image: `${this.baseHref}laptop1.png`,
    price: 75000,
    category: 'Laptops',
    quantity: 30,
    inventoryStatus: 'INSTOCK',
    rating: 5
  },
  {
    id: '2001',
    code: 'lp-102',
    name: 'Laptop Gamer Pro Z5',
    description: 'Potente laptop gaming con gráficos RTX y sistema de refrigeración avanzada para sesiones intensas.',
    image: `${this.baseHref}laptop2.png`,
    price: 120000,
    category: 'Laptops',
    quantity: 12,
    inventoryStatus: 'INSTOCK',
    rating: 5
  },
  {
    id: '2002',
    code: 'lp-103',
    name: 'Laptop WorkMate 14',
    description: 'Ideal para profesionales, con procesador rápido y diseño resistente para el trabajo diario.',
    image: `${this.baseHref}laptop3.png`,
    price: 68000,
    category: 'Laptops',
    quantity: 18,
    inventoryStatus: 'LOWINSTOCK',
    rating: 4
  },
  {
    id: '2003',
    code: 'lp-104',
    name: 'Laptop Creator 15',
    description: 'Perfecta para creadores de contenido, con pantalla calibrada y rendimiento gráfico sobresaliente.',
    image: `${this.baseHref}laptop4.png`,
    price: 98000,
    category: 'Laptops',
    quantity: 7,
    inventoryStatus: 'OUTOFSTOCK',
    rating: 5
  },
  {
    id: '2004',
    code: 'lp-105',
    name: 'Laptop Everyday 13',
    description: 'Una laptop versátil para el día a día, con buena autonomía y diseño compacto.',
    image: `${this.baseHref}laptop1.png`,
    price: 54000,
    category: 'Laptops',
    quantity: 25,
    inventoryStatus: 'INSTOCK',
    rating: 4
  }
]);

 obtenerArreglo(): Observable<Products[]> {
  return this.miArregloSubject.asObservable();
 }


 obtenerArreglo1(): Observable<Products1[]> {
  return this.miArregloSubject1.asObservable();
 }
  


}

