import { IProduct } from './../../shared/interfaces/product';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private db: AngularFireDatabase,
    private router: Router,
    private snackBar: MatSnackBar) { }
  create(value) {
    const { name, description, imageUrl, price, store } = value;
    const id = this.db.createPushId();
    this.db.list('/products').push({
       id,
       name,
       description,
       price,
       imageUrl,
       store,
       favourited: 0,
       createdById: localStorage.getItem('userId')
     })
     .then(() => this.snackBar.open('Product created', 'yeet!', { duration: 3000} ));
  }

  getAll(): Observable<IProduct[]> {
    return this.db.list<IProduct>('products')
      .snapshotChanges()
      .pipe(
        map((data) => data.map(x => ({
          key: x.payload.key, ...(x as any).payload.val()
      }))));
  }

  update(id: string, prop: string, value: string) {
    return this.db.object('/products/' + id)
      .update({ [prop]: +value + 1 });
  }

  getById(id: string): Observable<IProduct> {
    return this.db.object<IProduct>('/products/' + id)
      .snapshotChanges()
      .pipe(map((c) => {
        const value: any = c.payload.val();
        const product: IProduct = {
          id: c.key,
          name: value.name,
          description: value.description,
          price: value.price,
          favourited: value.favourited,
          imageUrl: value.imageUrl,
          store: value.store,
          createdById: value.createdById

        };
        return product;
      }));
  }

  delete(id) {
    this.db.object('/products/' + id).remove();
  }
}
