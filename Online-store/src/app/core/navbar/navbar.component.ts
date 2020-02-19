import { AuthService } from './../../auth/service/auth.service';
import { Component, Output, EventEmitter } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Output() sidenavToggle = new EventEmitter<void>();

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private authService: AuthService) {}

  toggleSidenav() {
    this.sidenavToggle.emit();
  }

  get isAuth() {
    return this.authService.isLoggedIn;
  }

  get currentUser() {
    return this.authService.userData;
  }

  signOut() {
    this.authService.signOut();
  }

}
