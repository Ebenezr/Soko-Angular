import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MobileHomeComponent as MobileHomeComponent } from './mobile_home/mobile_home.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule, Routes } from '@angular/router';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { AdvertsComponent } from './adverts/adverts.component';
import { MobileCategoryComponent } from './mobile_category/mobile_category.component';
import { MobileProductsComponent } from './mobile_products/mobile_products.component';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MobileFooterComponent } from './mobile-footer/mobile-footer.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';




const routes: Routes = [
  { path: 'home', component: MobileHomeComponent },
  { path: 'products', component: MobileProductsComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];


@NgModule({
  declarations: [
    MobileHomeComponent,
    SearchbarComponent,
    AdvertsComponent,
    MobileCategoryComponent,
    MobileProductsComponent,
    MobileFooterComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    LayoutModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatDividerModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ]
})
export class MobileModule { }
