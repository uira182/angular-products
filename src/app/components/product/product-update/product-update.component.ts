import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DadosService } from 'src/app/services/dados.service';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.scss'],
})
export class ProductUpdateComponent implements OnInit {

  product: Product = {
    name: '',
    price: null
  };

  constructor(
    private productService: ProductService,
    private router: Router,
    public dadoService: DadosService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.readProduct();
  }

  readProduct(): void{
    console.log('Dados pegos', this.dadoService.pegarDados('products'));
    const id = this.route.snapshot.paramMap.get('id');
    console.log('Id passado:', id);
    this.productService.readById(id).subscribe(product => {
      console.log('Pagina Atualização - Produtos: ', product);
      this.product = product;
    });
  }

  updateProduct(): void {
    this.productService.update(this.product).subscribe(product => {
      this.product = product;
      this.productService.showMessage('Produto atualizado!');
      this.router.navigate(['/products']);
    });
  }

  cancel(): void{
     this.router.navigate(['/products']);
  }

}
