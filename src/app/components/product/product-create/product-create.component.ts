import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss'],
})
export class ProductCreateComponent implements OnInit {

  propLegal = 'qualquer';

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit() {
  }
  createProduct(): void{
    this.productService.showMessage('Produto criado!');
  }
  cancel(): void{
     this.router.navigate(['/products']);
  }
}
