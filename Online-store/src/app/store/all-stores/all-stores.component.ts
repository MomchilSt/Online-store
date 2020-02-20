import { IStore } from './../../shared/interfaces/store';
import { StoreService } from './../service/store.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-all-stores',
  templateUrl: './all-stores.component.html',
  styleUrls: ['./all-stores.component.css']
})
export class AllStoresComponent implements OnInit {
  stores: IStore[];

  constructor(private storeService: StoreService) { }

  ngOnInit() {
    this.storeService.getAll().subscribe(data => this.stores = data as IStore[]);
    console.log(this.stores);
  }

}
