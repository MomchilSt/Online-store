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

  // getUserByUid(uid: string) {
  //   return this.db.object('/users/' + uid)
  //     .snapshotChanges()
  //     .pipe(map((user) => {
  //       return user.payload.val() as any;
  //     }));
  // }

  // getCurrentUser() {
  //   return this.afAuth.authState.pipe(switchMap((user) => {
  //     if (user) {
  //       return this.getUserByUid(user.uid);
  //     } else {
  //       return new Observable();
  //     }
  //   }), map((user) => {
  //     return user;
  //   }));
  // }

  getUser(id) {
    return this.afDb
      .collection<IUser>('users', ref => ref.where('id', '==', id))
      .valueChanges()
      .pipe(
        mergeMap((userList: IUser[]) => userList),
        mergeMap((user: IUser) => {
          return this.afDb
            .collection<IProduct>('products', ref =>
              ref.where('createdById', '==', user.id)
            )
            .valueChanges()
            .pipe(
              map((products: IProduct[]) => {
                return {
                  ...user,
                  products
                };
              })
            );
        })
      );
  }
}


