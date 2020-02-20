import { StoreService } from './../service/store.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-store',
  templateUrl: './create-store.component.html',
  styleUrls: ['./create-store.component.css']
})
export class CreateStoreComponent implements OnInit {

  constructor(
    private storeService: StoreService
  ) { }

  ngOnInit(): void {
  }

  createStore(value) {
    this.storeService.create(value);
  }
}
