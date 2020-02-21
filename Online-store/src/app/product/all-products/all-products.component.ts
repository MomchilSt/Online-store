import { IProduct } from './../../shared/interfaces/product';
import { Observable } from 'rxjs';
import { ProductService } from './../service/product.service';
import { Component, OnInit, ViewChild, Input, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
  @Input() product: IProduct;
  @ViewChild('favourited', { static: false }) favourited: ElementRef;
  products: Observable<IProduct[]>;
  constructor(
    private productService: ProductService,
    private router: Router) { }

  ngOnInit() {
    this.products = this.productService.getAll();
  }

  favourite(prodcut) {
    const id = prodcut.key;
    const value = this.favourited.nativeElement.textContent;
    this.productService
      .update(id, 'favourited', value)
       .then(() => {
         // tslint:disable-next-line: no-unused-expression
         this.router.onSameUrlNavigation;
       })
       .catch(err => console.error(err));
  }

  details(id) {
    this.router.navigate(['/details/', id]);
  }
}
