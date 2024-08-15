import { create } from 'zustand';

export type CartState = {
  count: number;
};

export type CartActions = {
  decrementCount: () => void;
  incrementCount: () => void;
};

export type CartStore = CartState & CartActions;

export const useCartStore = create<CartStore>(set => ({
  count: new Date().getFullYear(),
  incrementCount: () => {
    set(state => {
      return { count: state.count + 1 };
    });
  },
  decrementCount: () => {
    set(state => {
      return { count: state.count - 1 };
    });
  },
}));
