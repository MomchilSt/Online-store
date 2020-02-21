import { ProductService } from './../service/product.service';
import { IProduct } from 'src/app/shared/interfaces/product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  product: Observable<IProduct>;
  constructor(
    private router: Router,
    private productService: ProductService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    const productId = this.route.snapshot.params['id'];
    this.product = this.productService.getById(productId);
  }

  deleteProduct(product) {
    if (window.confirm('Do you want to delete this product?')) {
      const id = product.id;
      this.productService.delete(id);
      this.router.navigate(['all-products']);
    }
  }
}
