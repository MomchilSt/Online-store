import { IStore } from './../../shared/interfaces/store';
import { StoreService } from './../service/store.service';
import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  @Input() store: IStore;
  @ViewChild('likes', { static: false }) likes: ElementRef;
  @ViewChild('dislikes', { static: false }) dislikes: ElementRef;
  constructor(
    private storeService: StoreService,
    private router: Router) { }

  ngOnInit(): void {
  }
  likePost(postId) {
    const value = this.likes.nativeElement.textContent;
    this.storeService
      .update(postId, 'likes', value)
      .then(() => {
        // tslint:disable-next-line: no-unused-expression
        this.router.onSameUrlNavigation;
      })
      .catch(err => console.error(err));
  }

  dislikePost(postId) {
    const value = this.dislikes.nativeElement.textContent;
    this.storeService
      .update(postId, 'dislikes', value)
      .then(() => {
        // tslint:disable-next-line: no-unused-expression
        this.router.onSameUrlNavigation;
      })
      .catch(err => console.error(err));
  }
}
