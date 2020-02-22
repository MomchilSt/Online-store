import { AuthService } from './../../auth/service/auth.service';
import { IUser } from './../../shared/interfaces/user';
import { UserService } from './../../user/service/user.service';
import { IProduct } from './../../shared/interfaces/product';
import { ProductService } from './../service/product.service';
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
  productFromDb: IProduct;
  userFromDb: IUser;
  createdId: string;

  constructor(
    private router: Router,
    private productService: ProductService,
    private userService: UserService,
    private authService: AuthService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    const productId = this.route.snapshot.params['id'];
    this.product = this.productService.getById(productId);
  }

  isAuthor(product) {
    const storageEmail = this.productService.getAuthorEmail();
    return storageEmail === product;
  }

  buyProduct(product) {
    const id = product.id;
    this.productService.getById(id).subscribe(data => this.productFromDb = data as IProduct);
    this.userService.updateBoughtProducts(this.authService.currentUser, this.productFromDb.price, this.productFromDb.name);
  }

  deleteProduct(product) {
    if (window.confirm('Do you want to delete this product?')) {
      const id = product.id;
      this.productService.delete(id);
      this.router.navigate(['all-products']);
    }
  }
}
