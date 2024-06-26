import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DetailsCategoryComponent } from './details-category/details-category.component';

@Injectable({
    providedIn: 'root'
})
export class CanDeactivateCategoryDetails implements CanDeactivate<DetailsCategoryComponent>
{
    canDeactivate(
        component: DetailsCategoryComponent,
        currentRoute: ActivatedRouteSnapshot,
        currentState: RouterStateSnapshot,
        nextState: RouterStateSnapshot
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
    {
        // Get the next route
        let nextRoute: ActivatedRouteSnapshot = nextState.root;
        while ( nextRoute.firstChild )
        {
            nextRoute = nextRoute.firstChild;
        }

        if ( !nextState.url.includes('/categories') )
        {
            return true;
        }

        if ( nextRoute.paramMap.get('key') )
        {
            return true;
        }
        else
        {
            return component.closeDrawer().then(() => true);
        }
    }
}
