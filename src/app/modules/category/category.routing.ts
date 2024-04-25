import { Route } from "@angular/router";
import { CategorymenuComponent } from "src/app/eduman/common/header/categorymenu/categorymenu.component";
import { ListCategoryComponent } from "./list-category/list-category.component";
import { DetailsCategoryComponent } from "./details-category/details-category.component";

export const categoryRoute : Route[] = [
    {
        path     : '',
        component: CategorymenuComponent,
        children: [
            {
                path: '',
                component: ListCategoryComponent,
                resolve : {
                    // courses : CoursesResolver
                }
            },
              {
                path: 'detail/:id',
                component: DetailsCategoryComponent,
                resolve : {
                    // courses : CoursesCourseResolver
                }
              }
          ]
    }
]