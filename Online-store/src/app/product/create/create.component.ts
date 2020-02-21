import { IStore } from './../../shared/interfaces/store';
import { StoreService } from './../../store/service/store.service';
import { ProductService } from './../service/product.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  stores: Observable<IStore[]>;

  ngOnInit() {
    this.stores = this.storeService.getAll();
  }

  constructor(
    private productService: ProductService,
    private storeService: StoreService) { }
  createProduct(value) {
    this.productService.create(value);
  }
}
