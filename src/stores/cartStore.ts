import { Product } from '@/types/types';
import { create } from 'zustand';

export type Order = {
  id: string;
  product: Product;
  promo: Promo;
  quantity: number;
};

export type Promo = 1 | 3 | 12;

export type CartState = {
  total: number;
  orders: Order[];
};

export type CartActions = {
  addToCart: (order: Order) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
};

export type CartStore = CartState & CartActions;

export const useCartStore = create<CartStore>(set => ({
  total: 0,
  orders: [],
  addToCart: newOrder => {
    set(state => {
      const orders = [...state.orders, newOrder];
      const total = getTotal(orders);

      return { orders, total };
    });
  },
  removeFromCart: id => {
    set(state => {
      const orders = state.orders.filter(order => order.id !== id);
      const total = getTotal(orders);

      return { orders, total };
    });
  },
  updateQuantity: (id, quantity) => {
    if (quantity < 1 || quantity > 20) return;

    set(state => {
      const orders = state.orders.map(order => (order.id === id ? { ...order, quantity } : order));
      const total = getTotal(orders);

      return { orders, total };
    });
  },
}));

function getTotal(orders: Order[]): number {
  return orders.reduce((acc, curr) => {
    /* Look up on the product price array for the price it should
    use according to the selected promo */
    const currentPrice = curr.product.priceDetails.find(p => p.quantity === curr.promo)?.value || 0;

    return acc + currentPrice * curr.quantity;
  }, 0);
}
