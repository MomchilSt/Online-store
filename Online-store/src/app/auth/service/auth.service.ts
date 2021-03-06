import { AngularFireDatabase } from '@angular/fire/database';
import { auth, User } from 'firebase/app';
import { Injectable } from '@angular/core';
import { IUser } from '../../shared/interfaces/user';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // tslint:disable-next-line: variable-name
  private _isAuth = false;
  private userInfo: IUser;
  public currentUser: string;

  constructor(
    public afDb: AngularFirestore,
    private afAuth: AngularFireAuth,
    private db: AngularFireDatabase,
    private router: Router,
    private snackbar: MatSnackBar
  ) {
    const currentUser = localStorage.getItem('userId');
    this.currentUser = currentUser ? currentUser : null;

    this.afAuth.authState.subscribe(afUserInfo => {
       if (afUserInfo) {
         this.getUserData(afUserInfo).subscribe((user: IUser) => {
           this.userInfo = user ? user : null;
         });
       } else {
         this.userInfo = null;
       }
     });
  }

  get isLoggedIn(): boolean {
    return this._isAuth || !!localStorage.getItem('user');
  }

  get userData(): IUser {
    return this.userInfo;
  }

  getUserData(user) {
    return this.afDb
      .collection('users')
      .doc(user.uid)
      .snapshotChanges()
      // tslint:disable-next-line: no-shadowed-variable
      .pipe(map(user => user.payload.data()));
  }

  signIn(value) {
    const { email, password } = value;
    return this.afAuth
    .auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        this._isAuth = true;
        localStorage.setItem('user', 'logged');
        localStorage.setItem('email', email);
        this.router.navigate(['all-products']);
      })
      .catch(error => {
        this.snackbar.open(error.message, 'Woops!', {
          duration: 3000
        });
      });
  }

  signUp(value) {
    const { email, passwordsGroup, name, imageUrl } = value;
    if (passwordsGroup.password !== passwordsGroup.repassword) {
      this.snackbar.open('Password do not match', 'Woops!', {
        duration: 3000
      });
      return;
    }
    return this.afAuth
    .auth
      .createUserWithEmailAndPassword(email, passwordsGroup.password)
      .then(afUserInfo => {
        this.setUserData(afUserInfo, name, imageUrl);
        this.signOut();
        this.router.navigate([ 'auth/login' ]);
      })
      .catch(error => {
        this.snackbar.open(error.message, 'Woops!', {
          duration: 3000
        });
      });
  }

  GoogleAuth() {
    return this.authLogin(new auth.GoogleAuthProvider()).then(() => {
      this.router.navigate([ 'auth/login' ]);
    });
  }

  authLogin(provider) {
    return this.afAuth.auth
      .signInWithPopup(provider)
      .then(afUserInfo => {
        this.setUserData(afUserInfo);
        this.router.navigate(['home']);
      })
      .catch(error => {
        this.snackbar.open(error.message, 'Woops!', {
          duration: 3000
        });
      });
  }

   setUserData(afUserInfo, name?: string, imageUrl?: string) {
    this.db.object('/users/' + afUserInfo.user.uid).update({
      id: afUserInfo.user.uid,
      email: afUserInfo.user.email,
      name: name || afUserInfo.displayName,
      imageUrl: imageUrl || 'https://www.jetphotos.com/assets/img/user.png',
      productsBought: []
    });
   }

  signOut() {
    return this.afAuth
      .auth
      .signOut()
      .then(() => {
        this.userInfo = null;
        localStorage.removeItem('user');
        localStorage.removeItem('email');
        localStorage.clear();
        this.router.navigate(['home']);
      })
      .catch(err => console.error(err));
  }
}
