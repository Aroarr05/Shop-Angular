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

/*import { Component } from '@angular/core';
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
}*/

/*import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { CartService } from '../../services/cart.service';
import { Product } from '../../model/products';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  standalone: false
})

export class CartComponent {
  items: Product[] = this.cartService.getItems();
  checkoutForm = this.formBuilder.group({
    name: '',
    address: '',
    shipping: '' 
  });

  shippingCosts!: Observable<{ type: string, price: number }[]>;

  constructor(private cartService: CartService, private formBuilder: FormBuilder) {
    this.shippingCosts = this.cartService.getShippingPrices();
  }

  onSubmit(): void {
    this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }

  removeItem(product: Product) {
    this.cartService.removeFromCart(product);
    this.items = this.cartService.getItems();
  }
}*/

import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../../services/cart.service';
import { Product } from '../../model/products';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  standalone: false
})

export class CartComponent {
  items: Product[] = [];
  shippingCosts!: { type: string, price: number }[];
  totalPrice: number = 0;

  checkoutForm = this.formBuilder.group({
    name: '',
    address: '',
    shipping: ''
  });

  constructor(private cartService: CartService, private formBuilder: FormBuilder) {
    this.items = this.cartService.getItems();

    this.cartService.getShippingPrices().subscribe(data => {
      this.shippingCosts = data;
    });

    // Actualizar total cuando cambie el método de envío
    this.checkoutForm.get('shipping')?.valueChanges.subscribe(() => this.updateTotal());
  }

  updateTotal() {
    const shippingType = this.checkoutForm.get('shipping')?.value;
    const shippingPrice = this.shippingCosts?.find(s => s.type === shippingType)?.price || 0;
    const productsTotal = this.items.reduce((sum, item) => sum + item.price, 0);
    this.totalPrice = productsTotal + shippingPrice;
  }

  onSubmit(): void {
    const formValue = this.checkoutForm.value;

    // Mostrar en consola el total
    console.log('Pedido completado:');
    console.log('Cliente:', formValue.name);
    console.log('Dirección:', formValue.address);
    console.log('Método de envío:', formValue.shipping);
    //toFixed: mostrar un nº con 2 decimales
    console.log('Total a pagar:', this.totalPrice.toFixed(2));

    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
    this.totalPrice = 0;
  }

  removeItem(product: Product) {
    this.cartService.removeFromCart(product);
    this.items = this.cartService.getItems();
    this.updateTotal();
  }
}
