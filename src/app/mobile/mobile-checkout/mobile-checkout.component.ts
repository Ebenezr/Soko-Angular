import { Component } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

interface Location {
  name: string;
  place: string;
}

@Component({
  selector: 'app-mobile-checkout',
  templateUrl: './mobile-checkout.component.html',
  styleUrls: ['./mobile-checkout.component.scss']
})
export class MobileCheckoutComponent {
  imagePath1 = '../../../assets/images/mpesa.png'


  emailFormControl = new FormControl('', [Validators.required, Validators.email]);


  distributorControl = new FormControl<Location | null>(null, Validators.required);
  selectFormControl = new FormControl('', Validators.required);
  distributors: Location[] = [
    {name: 'Nairobi', place: 'Nai'},
    {name: 'Kisumu', place: 'Ksm'},
    {name: 'Nakuru', place: 'Nkr'},
    {name: 'Eldoret', place: 'Eld'},
  ];

}
