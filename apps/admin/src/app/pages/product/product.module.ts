import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroModule } from '@cleric-eshop/ng-zorro';
import { AdminUiModule } from '@cleric-eshop/admin-ui';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCategoryComponent } from './product-category/product-category.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';


@NgModule({
  declarations: [ProductComponent, ProductListComponent, ProductCategoryComponent, ProductDetailComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ProductRoutingModule,
    NgZorroModule,
    AdminUiModule
  ]
})
export class ProductModule { }
