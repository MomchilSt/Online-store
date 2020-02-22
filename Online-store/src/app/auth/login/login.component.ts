import { AuthService } from './../service/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private authService: AuthService) { }

   login(value) {
     this.authService.signIn(value);
   }

   signInGoogle() {
    this.authService.GoogleAuth();
  }
}
