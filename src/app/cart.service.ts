import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class CartService {
  items = [];

  addToCart(product) {
    this.items.push(product);
  }

  getItems(product) {
    return this.items;
  }

  clearCart(){
    this.items = [];
    return this.items;
  }

  constructor() {}
}
