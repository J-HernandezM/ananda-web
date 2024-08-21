import { ProductTemporalInterface } from '@/shared/utils/mockedProducts';
import { create } from 'zustand';

export type Order = {
  id: string;
  product: ProductTemporalInterface;
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
    set(state => {
      const orders = state.orders.map(order => (order.id === id ? { ...order, quantity } : order));
      const total = getTotal(orders);

      return { orders, total };
    });
  },
}));

function getTotal(orders: Order[]): number {
  return orders.reduce((acc, curr) => acc + curr.product.price * curr.quantity, 0);
}
