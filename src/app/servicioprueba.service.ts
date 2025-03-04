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

   private miArregloSubject = new BehaviorSubject<Products[]>([
    
     
    {
      id: '1000',
      code: 'f230fh0g3',
      name: 'Bamboo Watch',
      description: 'Product Description',
      image: '/imagen1.png',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5
    },

    {
      id: '1000',
      code: 'f230fh0g3',
      name: 'Bamboo Watch',
      description: 'Product Description',
      image: '/imagen3.png',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5
    },

    {
      id: '1000',
      code: 'f230fh0g3',
      name: 'Bamboo Watch',
      description: 'Product Description',
      image: '/imagen1.png',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5
    },
    

    {
      id: '1000',
      code: 'f230fh0g3',
      name: 'Bamboo Watch',
      description: 'Product Description',
      image: '/imagen2.png',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5
    },
    {
      id: '1000',
      code: 'f230fh0g3',
      name: 'Bamboo Watch',
      description: 'Product Description',
      image: '/imagen4.png',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5
    },
  
  
  ]);





  private miArregloSubject1 = new BehaviorSubject<Products1[]>([
    
     
    {
      id: '1000',
      code: 'f230fh0g3',
      name: 'Bamboo Watch',
      description: 'Product Description',
      image: '/laptop1.png',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5
    },

    {
      id: '1000',
      code: 'f230fh0g3',
      name: 'Bamboo Watch',
      description: 'Product Description',
      image: '/laptop2.png',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5
    },

    {
      id: '1000',
      code: 'f230fh0g3',
      name: 'Bamboo Watch',
      description: 'Product Description',
      image: '/laptop3.png',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'LOWINSTOCK',
      rating: 5
    },
    

    {
      id: '1000',
      code: 'f230fh0g3',
      name: 'Bamboo Watch',
      description: 'Product Description',
      image: '/laptop4.png',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'OUTOFSTOCK',
      rating: 5
    },
    {
      id: '1000',
      code: 'f230fh0g3',
      name: 'Bamboo Watch',
      description: 'Product Description',
      image: '/laptop1.png',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5
    },
  
  
  ]);

 obtenerArreglo(): Observable<Products[]> {
  return this.miArregloSubject.asObservable();
 }


 obtenerArreglo1(): Observable<Products1[]> {
  return this.miArregloSubject1.asObservable();
 }
  


}

