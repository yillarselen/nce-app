import { Product } from "./ProductTypes";

export interface CartItem {
  product: Product;
  quantity: number;
}
