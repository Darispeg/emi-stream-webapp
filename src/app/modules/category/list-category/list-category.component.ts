import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from "@angular/core";
import { UntypedFormControl } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable, Subject, combineLatest, combineLatestAll, concat, debounceTime, forkJoin, map, of, switchMap, takeUntil } from "rxjs";

import { MatPaginator } from "@angular/material/paginator";
import { MatDrawer } from "@angular/material/sidenav";
import { CategoryService } from "../category.service";
import { Category } from "../category.type";

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.scss']
})
export class ListCategoryComponent {


  private _unsubscribeAll: Subject<any> = new Subject<any>();

  searchInputControl: UntypedFormControl = new UntypedFormControl();
  categories$!: Observable<Category[]>
  /**
   * Constructor
   */
  constructor(
      private _activatedRoute: ActivatedRoute,
      private _changeDetectorRef: ChangeDetectorRef,
      private _router: Router,
      private _categoryService: CategoryService,
  ) { }

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    console.log("Lista de Cursos");

    this.categories$ = this._categoryService.categories$;

    this.categories$.subscribe((response) => {
      console.log(response);
    })
  }


  /**
   * On destroy
   */
  ngOnDestroy(): void {
      // Unsubscribe from all subscriptions
      this._unsubscribeAll.next(null);
      this._unsubscribeAll.complete();
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * On backdrop clicked
   */
  onBackdropClicked(): void {
      // Go back to the list
      this._router.navigate(['./'], { relativeTo: this._activatedRoute });

      // Mark for check
      this._changeDetectorRef.markForCheck();
  }

  /**
   * Track by function for ngFor loops
   *
   * @param index
   * @param item
   */
  trackByFn(index: number, item: any): any {
      return item.key || index;
  }
}
