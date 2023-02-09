import { Component, OnInit, Self } from '@angular/core';
import {GoodsService} from '../goods.service'
import { Product } from '../products';

@Component({
  selector: 'app-mobile_products',
  templateUrl: './mobile_products.component.html',
  styleUrls: ['./mobile_products.component.scss']
})
export class MobileProductsComponent implements OnInit{
  imagePath1 = '../../../assets/images/rhapso.png'
  imagePath2 = '../../../assets/images/postman.png'


  products : Product[]=[]

  constructor( private goodsService: GoodsService) {}
  

  ngOnInit(): void {
    this.products = this.goodsService.getProducts()
  }

  decrement(index:number) {
    if(this.products[index].ordered_items){
      this.products[index].ordered_items=Number(this.products[index].ordered_items)-1;
    }
    else(
      this.products[index].ordered_items=0
    )
   
  }

  increment(index:number) {
    if(this.products[index].ordered_items){
      this.products[index].ordered_items=Number(this.products[index].ordered_items)+1;

    }else{
      this.products[index].ordered_items=1;
    }

   
  }

}
