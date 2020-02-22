import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from './../../auth/service/auth.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class InnerGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
    private snackbar: MatSnackBar
  ) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
    if (this.authService.isLoggedIn) {
      this.snackbar.open('You are not allowed to access this URL!', 'Woops!', {
        duration: 3000
      });
      // window.alert("You are not allowed to access this URL!");
      this.router.navigate(['all-products']);
      return false;
    }
    return true;
  }
}
