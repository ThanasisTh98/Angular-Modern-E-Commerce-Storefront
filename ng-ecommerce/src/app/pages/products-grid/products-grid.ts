import { Component, signal, computed, input } from '@angular/core';
import { Product } from '../../models/product';
import { ProductCard } from "../../components/product-card/product-card";
import { MatSidenavContainer, MatSidenavContent, MatSidenav } from "@angular/material/sidenav";
import { MatNavList, MatListItem, MatListItemTitle } from "@angular/material/list";
import { RouterLink } from '@angular/router';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-products-grid',
  imports: [ProductCard, MatSidenavContainer, MatSidenavContent, MatSidenav, MatNavList, MatListItem, MatListItemTitle, RouterLink, TitleCasePipe],
  template: `

  <mat-sidenav-container>
    <mat-sidenav mode="side" opened="true">
      <div class="p-6">
        <h2 class="text-lg text-gray-900 mb-4">Categories</h2>
        <mat-nav-list>
         @for (cat of categories(); track cat) {
          <mat-list-item [activated]="cat === category()" class="my-2" [routerLink]="['/products', cat]">
            <span matListItemTitle class="font-medium" [class]="cat === category() ? '!text-white' : ''">
              {{ cat | titlecase }}
            </span>
          </mat-list-item>
         }
        </mat-nav-list>
      </div>
    </mat-sidenav>
    <mat-sidenav-content class="bg-gray-100 p-6 h-full">
      <h1 class="text-2xl font-bold text-gray-900 mb-1">{{ category() | titlecase }}</h1>
      <p class="text-base text-gray-600 mb-6">
        {{ filteredProducts().length }} products found
      </p>
        <div class="responsive-grid">
        @for (product of filteredProducts(); track product.id) {
          <app-product-card [product]="product" />
        }
        </div>
    </mat-sidenav-content>
  </mat-sidenav-container>
  `,
  styles: ``,
})
export default class ProductsGrid {

  category = input<string>('all');

  products = signal<Product[]>([
    {
      id: '1',
      name: 'Classic Cotton T-Shirt',
      description: 'Comfortable and breathable cotton t-shirt perfect for everyday wear',
      price: 29.99,
      imageUrl: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=500&fit=crop',
      rating: 4.5,
      reviewsCount: 128,
      inStock: true,
      category: 'Tops'
    },
    {
      id: '2',
      name: 'V-Neck Polo Shirt',
      description: 'Elegant polo shirt with ribbed collar and cuffs',
      price: 39.99,
      imageUrl: 'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=400&h=500&fit=crop',
      rating: 4.6,
      reviewsCount: 95,
      inStock: true,
      category: 'Tops'
    },
    {
      id: '3',
      name: 'Wool Sweater',
      description: 'Cozy wool blend sweater for cold winter days',
      price: 89.99,
      imageUrl: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=500&fit=crop',
      rating: 4.4,
      reviewsCount: 93,
      inStock: true,
      category: 'Jumpers'
    },
    {
      id: '4',
      name: 'Cable Knit Cardigan',
      description: 'Classic cable knit cardigan with button closure',
      price: 79.99,
      imageUrl: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=500&fit=crop',
      rating: 4.7,
      reviewsCount: 156,
      inStock: true,
      category: 'Jumpers'
    },
    {
      id: '5',
      name: 'Leather Jacket',
      description: 'Premium genuine leather jacket with zipper closure',
      price: 199.99,
      imageUrl: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=500&fit=crop',
      rating: 4.8,
      reviewsCount: 89,
      inStock: false,
      category: 'Jackets'
    },
    {
      id: '6',
      name: 'Denim Jacket',
      description: 'Vintage-style denim jacket with classic wash',
      price: 89.99,
      imageUrl: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=400&h=500&fit=crop',
      rating: 4.5,
      reviewsCount: 142,
      inStock: true,
      category: 'Jackets'
    },
    {
      id: '7',
      name: 'Slim Fit Jeans',
      description: 'Modern slim fit jeans with stretch fabric for ultimate comfort',
      price: 79.99,
      imageUrl: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=500&fit=crop',
      rating: 4.7,
      reviewsCount: 245,
      inStock: true,
      category: 'Bottoms'
    },
    {
      id: '8',
      name: 'Cargo Shorts',
      description: 'Practical cargo shorts with multiple pockets',
      price: 44.99,
      imageUrl: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=400&h=500&fit=crop',
      rating: 4.2,
      reviewsCount: 76,
      inStock: true,
      category: 'Bottoms'
    },
    {
      id: '9',
      name: 'Leather Belt',
      description: 'Genuine leather belt with silver buckle',
      price: 34.99,
      imageUrl: 'https://images.unsplash.com/photo-1624222247344-550fb60583b2?w=400&h=500&fit=crop',
      rating: 4.6,
      reviewsCount: 188,
      inStock: true,
      category: 'Accessories'
    },
    {
      id: '10',
      name: 'Winter Scarf',
      description: 'Soft cashmere blend scarf in multiple colors',
      price: 49.99,
      imageUrl: 'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=400&h=500&fit=crop',
      rating: 4.8,
      reviewsCount: 203,
      inStock: true,
      category: 'Accessories'
    }
  ]);

  filteredProducts = computed(() => {
    const cat = this.category().toLowerCase();
    return cat === 'all' 
      ? this.products() 
      : this.products().filter(p => p.category.toLowerCase() === cat);
  });

  categories = signal<string[]>(['tops', 'jumpers', 'jackets', 'bottoms', 'accessories']);


}
