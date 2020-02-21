import { IStore } from './../../shared/interfaces/store';
import { AngularFirestore } from '@angular/fire/firestore';
import { IProduct } from 'src/app/shared/interfaces/product';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(
    private db: AngularFireDatabase,
    private afDb: AngularFirestore,
    private router: Router,
    private snackBar: MatSnackBar) { }
  create(value) {
    const { name, address, imageUrl } = value;
    this.db.list('/stores').push({
       name,
       address,
       imageUrl,
       likes: 0,
       dislikes: 0,
       products: []
     })
     .then(() => this.snackBar.open('Store created', 'yeet!', { duration: 3000} ));
  }

  getAll(): Observable<IStore[]> {
    return this.db.list<IStore>('stores')
      .snapshotChanges()
      .pipe(
        map((data) => data.map(x => ({
          key: x.payload.key, ...(x as any).payload.val()
      }))));
  }

  update(id: string, prop: string, value: string) {
    return this.db.object('/stores/' + id)
      .update({ [prop]: +value + 1 });
  }
}
