import { Component } from '@angular/core';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss']
})
export class ProductInfoComponent {
  imagePath1 = '../../../assets/images/rhapso.png'
  rating: number = 4.5;

  // ratingRange: number[] = [2,4];

  ngOnInit() {
    
  }

  


  // getRatingIcon(i: number, rating: number) {
  //   if (i + 0.5 <= rating) {
  //     return 'star';
  //   } else if (i < rating) {
  //     return 'star_half';
  //   } else {
  //     return 'star_border';
  //   }
  // }
  

}
