import { Component, OnInit } from "@angular/core";
import { CoursesService } from "../course.service";
import { Observable } from "rxjs";
import { Course } from "../course.types";

@Component({
  selector: 'courses-list',
  templateUrl: './list.component.html',
})
export class CoursesListComponent implements OnInit {

  showCategoryActive: boolean = false;
  showLevelActive: boolean = false;

  courses$!: Observable<Course[]>

  levels: string[] = ["PRINCIPIANTE", "INTERMEDIO", "AVANZADO", "EXPERTO"]

  constructor(
    private _coursesService: CoursesService
  ) { }

  ngOnInit(): void {
    console.log("Lista de Cursos");

    this.courses$ = this._coursesService.courses$;

    this.courses$.subscribe((response) => {
      console.log(response);
    })
  }

  showCategory() {
    this.showCategoryActive = !this.showCategoryActive;
  }

  showLevel() {
    this.showLevelActive = !this.showLevelActive;
  }

  trackByFn(index: number, item: any): any {
    return item.Key || index;
  }
}  