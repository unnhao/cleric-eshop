import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCategoryComponent } from './product-category/product-category.component';

const routes: Routes = [
  {
    path: '',
    component: ProductComponent,
    children: [
      {
        path: 'list',
        component: ProductListComponent,
        data: {
          breadcrumb: '商品列表'
        }
      },
      {
        path: 'category',
        component: ProductCategoryComponent,
        data: {
          breadcrumb: '商品分類管理'
        }
      },
      {
        path: '**',
        redirectTo: 'list'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
