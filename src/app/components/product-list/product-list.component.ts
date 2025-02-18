import { Component } from '@angular/core';

import { products } from '../../model/products'; 

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css'],
    standalone: false
})
export class ProductListComponent {
  // hacemos una copia de una array
  products = [...products];

  //para compartir el producto
  share() {
    window.alert('The product has been shared!');
  }

  // notificar al usuario cuando el producto esté en oferta
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}


