import { IUser } from './../../shared/interfaces/user';
import { IProduct } from 'src/app/shared/interfaces/product';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from './../../auth/service/auth.service';
import { Injectable } from '@angular/core';
import { map, mergeMap, switchMap, tap } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private afDb: AngularFirestore,
    private db: AngularFireDatabase,
    private afAuth: AngularFireAuth,
    private afs: AngularFireStorage
  ) { }

  getUserByUid(uid: string) {
    return this.db.object('/users/' + uid)
      .snapshotChanges()
      .pipe(map((user) => {
        return user.payload.val() as any;
      }));
  }

  getCurrentUser() {
    return this.afAuth.authState.pipe(switchMap((user) => {
      if (user) {
        return this.getUserByUid(user.uid);
      } else {
        return new Observable();
      }
    }), map((user) => {
      return user;
    }));
  }

  updateBoughtProducts(id: string, price: number, name: string) {
    const utc = new Date().toJSON().slice(0, 10).replace(/-/g, '/');
    return this.db.object('/users/' + id)
      .update({ productsBought: 'Name: ' + name + ' ' + 'cost: $' + price + ' bought on ' + utc });
  }
  update(id: string, prop: string, value: string) {
    return this.db.object('/products/' + id)
      .update({ [prop]: +value + 1 });
  }
}


