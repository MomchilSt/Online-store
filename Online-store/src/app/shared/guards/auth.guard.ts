import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from './../../auth/service/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
    private afAuth: AngularFireAuth) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | boolean {
       if (!this.authService.isLoggedIn && !this.authService.userData) {
         this.router.navigate(['auth/login']);
         return false;
       }
       return true;
  }
}
