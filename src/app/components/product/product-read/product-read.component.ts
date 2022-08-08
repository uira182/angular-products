import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.scss'],
})
export class ProductReadComponent implements OnInit {

  products: Product[];

  displayedColumns = ['id', 'name', 'price', 'action'];

  constructor(
    private alertController: AlertController,
    private productSevice: ProductService,
    public router: Router) {

  }
  ngOnInit() {
    console.log('Visualizando pagina');
    this.readProducts();
  }

  updateProduct(id: number): void{
    this.router.navigate(['/product/update/' + id]);
  }

  readProducts(): void{
    this.productSevice.read().subscribe(products => {
      this.products = products;
      console.log('Pagina Visualização - Produtos: ', this.products);
    });
  }

  async presentAlert(id: number) {
    const alert = await this.alertController.create({
      header: 'Alerta!',
      message: 'Deseja remover o produto?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: (blah) => { console.log('Exclusão cancelada.'); }
        },
        {
          text: 'Sim, Deletar!',
          handler: () => {
            console.log('Produto Excluido.');
            this.delete(id);
          }
        }
      ]
    });

    await alert.present();
  }

  delete(id: number): void{
    this.productSevice.delete(id).subscribe(products => {
      console.log('Pagina de Exclusão - Produtos: ', this.products);
      this.readProducts();
    });
  }

}
