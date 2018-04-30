import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { StarComponent } from '../shared/star.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProductGuardService } from './product-guard.service';
import { ProductServices } from './product.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'products' , component: ProductListComponent },
      { path: 'products/:id', canActivate:[ ProductGuardService ], component: ProductDetailComponent }
    ])
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConvertToSpacesPipe,
    StarComponent
  ],
  providers: [
    ProductServices,
    ProductGuardService
  ]
})
export class ProductModule { }
