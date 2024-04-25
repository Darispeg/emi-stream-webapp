import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatMenuModule } from "@angular/material/menu";
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from "@angular/material/select";
import { MatSidenavModule } from "@angular/material/sidenav";


import { ListCategoryComponent } from './list-category/list-category.component';
import { DetailsCategoryComponent } from './details-category/details-category.component';
import { categoryRoute } from "./category.routing";

@NgModule({
    declarations : [

    
    ListCategoryComponent,
           DetailsCategoryComponent
  ],
    imports : [
      CommonModule,
      FormsModule,
      RouterModule.forChild(categoryRoute),
      ReactiveFormsModule,
      MatButtonModule,
      MatDividerModule,
      MatFormFieldModule,
      MatIconModule,
      MatInputModule,
      MatMenuModule,
      MatPaginatorModule,
      MatSelectModule,
      MatSidenavModule,
    ],
    exports : [

    ]
})
export class CategoriesModule {}