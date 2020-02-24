import { map } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserService } from './../service/user.service';
import { auth, User } from 'firebase/app';
import { AuthService } from './../../auth/service/auth.service';
import { IUser } from './../../shared/interfaces/user';
import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: IUser;
  productsBought: any;

  constructor(
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.userService.getCurrentUser()
    .subscribe(data => {
      this.user = data;
      if (data.productsBought) {
        this.productsBought = data.productsBought;
      }
      console.log(this.user);
    });
  }
}

