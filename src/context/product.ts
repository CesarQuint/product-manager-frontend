import { create } from "zustand";
import { Product } from "../types";

interface ProductState {
  products: Product[];
  setProducts: (products: Product[]) => void;
}

export const useProducts = create<ProductState>((set) => ({
  products: [],
  setProducts: (products) => set({ products }),
}));
