import { ProductService } from './../service/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  stores: { name: string; }[] = [
    {
      name: 'candy'
    },
    {
      name: 'salty'
    }
  ];

  ngOnInit() {}

  constructor(private productService: ProductService) { }
  createProduct(value) {
    this.productService.create(value);
  }
}
