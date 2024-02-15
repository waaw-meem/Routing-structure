import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable()

export class AuthGuard implements CanActivate,CanActivateChild{
   
    constructor(private AuthService:AuthService,private route:Router){}

    canActivate(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot
    ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        
    this.AuthService.isAuthenticated()
    .then(
     (authenticated:boolean) => {
        if(authenticated) {
            return true
        }
        else{
            this.route.navigate(['/'])
        }
     }
    )   

    return true
}

canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.canActivate(route,state)
}
}