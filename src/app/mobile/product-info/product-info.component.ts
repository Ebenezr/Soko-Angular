import { Component } from '@angular/core';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss']
})
export class ProductInfoComponent {
  imagePath1 = '../../../assets/images/rhapso.png'
  ratingRange: number[] = [2,4];

  ngOnInit() {
    this.ratingRange = Array(5).fill(0).map((x, i) => i + 1);
  }

  rating = 5


  getRatingIcon(i: number, rating: number) {
    if (i + 0.5 <= rating) {
      return 'star';
    } else if (i < rating) {
      return 'star_half';
    } else {
      return 'star_border';
    }
  }
  

}
