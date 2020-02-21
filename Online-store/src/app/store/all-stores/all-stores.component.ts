import { IUser } from './../../shared/interfaces/user';
import { IStore } from './../../shared/interfaces/store';
import { StoreService } from './../service/store.service';
import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireList } from '@angular/fire/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-stores',
  templateUrl: './all-stores.component.html',
  styleUrls: ['./all-stores.component.css']
})
export class AllStoresComponent implements OnInit {
  @Input() store: IStore;
  @ViewChild('likes', { static: false }) likes: ElementRef;
  @ViewChild('dislikes', { static: false }) dislikes: ElementRef;
  stores: Observable<IStore[]>;

  constructor(
    private storeService: StoreService,
    private router: Router) { }

  ngOnInit() {
    this.stores = this.storeService.getAll();
  }

  likePost(store) {
    const id = store.key;
    const value = this.likes.nativeElement.textContent;
    this.storeService
      .update(id, 'likes', value)
       .then(() => {
         // tslint:disable-next-line: no-unused-expression
         this.router.onSameUrlNavigation;
       })
       .catch(err => console.error(err));
  }

   dislikePost(store) {
    const id = store.key;
    const value = this.dislikes.nativeElement.textContent;
    this.storeService
       .update(id, 'dislikes', value)
       .then(() => {
         // tslint:disable-next-line: no-unused-expression
         this.router.onSameUrlNavigation;
       })
       .catch(err => console.error(err));
   }
}
