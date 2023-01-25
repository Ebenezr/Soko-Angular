import { Component } from '@angular/core';

@Component({
  selector: 'app-mobile-cart',
  templateUrl: './mobile-cart.component.html',
  styleUrls: ['./mobile-cart.component.scss']
})
export class MobileCartComponent {

  imagePath1 = '../../../assets/images/rhapso.png'
  imagePath2 = '../../../assets/images/noodles.png'
  imagePath3 = '../../../assets/images/toss.png'

  delete (){
    console.log("component deleted")
  }

}
