import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

export interface CanComponentDeactivated{
    canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean
}

export class CanDeactivatedGuard implements CanDeactivate<CanComponentDeactivated>{
    canDeactivate(
    component: CanComponentDeactivated, 
    currentRoute: ActivatedRouteSnapshot, 
    currentState: RouterStateSnapshot, 
    nextState?: RouterStateSnapshot): 
    boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        
    return component.canDeactivate()
    }
}