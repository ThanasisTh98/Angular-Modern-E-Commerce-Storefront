import { Component, input } from '@angular/core';
import { Product } from '../../models/product';
import { MatButton } from "@angular/material/button";
import { MatIcon } from "@angular/material/icon";

@Component({
  selector: 'app-product-card',
  imports: [MatButton, MatIcon],
  template: `
    <div class="bg-white cursor-pointer rounded-xl shadow-lg overflow-hidden flex flex-col h-full">
      <img [src]="product().imageUrl" class="w-full h-[300px] object-cover rounded-t-xl" />
      <div class="p-5 flex flex-col flex-1">
        <h3 class="text-lg font-semibold text-gray-900 mb-2 leading-tight">{{ product().name }}</h3>
        <p class="text-gray-700 text-sm flex-1">{{ product().description }}</p>
        <!-- add raiting component -->
        <div class="text-sm font-medium mb-4">
          {{ product().inStock ? 'In Stock' : 'Out of Stock' }}
        </div>

        <div class="flex items-center justify-between mt-auto">
          <span class="text-xl font-bold text-gray-900">\£{{ product().price }}</span>
          <button matButton="filled" class="flex items-center gap-2">
            <mat-icon>add_shopping_cart</mat-icon>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class ProductCard {

  product = input.required<Product>()



}
