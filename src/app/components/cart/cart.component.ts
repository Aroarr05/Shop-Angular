/*import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
  standalone: false
})
export class CartComponent {

  items = this.cartService.getItems();
  checkoutForm = this.formBuilder.group({ name: '', address: '' });

  constructor(private cartService: CartService, private formBuilder: FormBuilder) { }

  onSubmit(): void {
    this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }
}*/

import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { CartService } from '../../services/cart.service';
import { Product } from '../../model/products';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrl: './cart.component.css',
    standalone: false
})
export class CartComponent {

  items = this.cartService.getItems();
  checkoutForm = this.formBuilder.group({ name: '', address: '' });
  
  constructor(private cartService: CartService, private formBuilder: FormBuilder) { }

  onSubmit(): void {
    // Process checkout data here
    this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }

  removeItem(product: Product) {
    this.cartService.removeFromCart(product);
  }
}




