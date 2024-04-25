import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Category } from './category.type';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private _category: BehaviorSubject<Category | null> = new BehaviorSubject<Category | null>(null);
  private _categories: BehaviorSubject<Category[]> = new BehaviorSubject<Category[]>([]);
  
  constructor(private _httpCLient: HttpClient) {}

  get categories$(): Observable<Category[]>    
  {
      return this._categories.asObservable();
  }

  get category$(): Observable<Category | null>
  {
      return this._category.asObservable();
  }

  getCategories() : Observable<Category[]>
  {
      return this._httpCLient.get<Category[]>(`${environment.APIurl}/courses`)
          .pipe(
              tap((categories) => {
                  this._categories.next(categories);
              })
          )
  }
}
