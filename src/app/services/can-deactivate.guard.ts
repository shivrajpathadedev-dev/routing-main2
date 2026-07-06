import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { IcanDeactivate } from "../models/icon-deactivate";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable({
    providedIn: 'root'
})
export class CanDeactivateGuard implements CanDeactivate<IcanDeactivate> {
    private _authservice = inject(AuthService)
    canDeactivate(component: IcanDeactivate, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot)
        : Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return component.canDeactivate();
    }
}