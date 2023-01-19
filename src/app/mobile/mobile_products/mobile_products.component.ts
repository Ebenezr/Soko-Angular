import { Component } from '@angular/core';

@Component({
  selector: 'app-mobile_products',
  templateUrl: './mobile_products.component.html',
  styleUrls: ['./mobile_products.component.scss']
})
export class MobileProductsComponent {
  imagePath1 = '../../../assets/images/rhapso.png'
  imagePath2 = '../../../assets/images/postman.png'

  counter: number = 0;
  constructor() {}

  decrement() {
    if(this.counter > 0) {
        this.counter--;
    }
  }

  increment() {
    if(this.counter < 10) {  /* Ideally there should be a limit. Needs to be removed*/ 
        this.counter++;
    }
  }

}
