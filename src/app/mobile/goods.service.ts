import { Injectable } from '@angular/core';
import { Product } from './products';

@Injectable({
  providedIn: 'root'
})
export class GoodsService {

  products: Product[]=[
    {
      name: "Rhapso",
      price: 456,
      size: "500ML",

    },
    {
      name: "Postman",
      price: 470,
      size: "500ML",
    },
    {
      name: "Noodles",
      price: 100,
      size: "500g",
    },
    {
      name: "Soap",
      price: 120,
      size: "500g",
    },
    {
      name: "Noodles",
      price: 100,
      size: "500g",
    }
  ]

  constructor() { }
  
  getProducts (){
    return this.products
  }
}
