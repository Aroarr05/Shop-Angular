import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  standalone: false
})

export class ShippingComponent {

  // La ! es una Aserción definitiva
  // Es como si le dijeras a TypeScript: "Confía en mí, esta propiedad será inicializada en algún momento antes de que sea utilizada"

  shippingCosts!: Observable<{ type: string, price: number }[]>;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.shippingCosts = this.cartService.getShippingPrices();
  }

}
