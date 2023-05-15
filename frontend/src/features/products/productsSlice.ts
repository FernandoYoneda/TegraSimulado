import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { Product } from "../../domain/product/types";

export type CartProduct = Product & {
  amount: number;
};

export interface CartState {
  products: CartProduct[];
  coupon?: { id: string; discount: number };
  productEditing?: Product;
}

const initialState: CartState = {
  products: [],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<CartProduct>) => {
      const productsIds = state.products.map((p) => p.id);
      if (!productsIds.includes(action.payload.id)) {
        state.products = [...state.products, action.payload];
      }
    },
    removeProductById: (state, action: PayloadAction<number>) => {
      state.products = state.products.filter((p) => p.id !== action.payload);
    },
    incrementByAmount: (
      state,
      action: PayloadAction<{ id: number; amount: number }>
    ) => {
      const index = state.products.findIndex((p) => p.id === action.payload.id);
      if (index < 0) {
        return;
      }
      const tempProducts = [...state.products];
      tempProducts[index].amount = action.payload.amount;

      state.products = tempProducts;
    },
    editProduct: (state, action: PayloadAction<Product>) => {
      state.productEditing = { ...action.payload };
    },
    clearEditProduct: (state) => {
      state.productEditing = undefined;
    },
  },
  extraReducers: (builder) => {},
});

export const {
  incrementByAmount,
  addProduct,
  removeProductById,
  clearEditProduct,
  editProduct,
} = productsSlice.actions;

export const selectProducts = (state: RootState) => state.products.products;
export const selectProductsPrice = (state: RootState) => {
  const total = state.products.products
    .map((p) => p.amount * p.price)
    .reduce((x, y) => x + y, 0);

  return state.products.coupon && total > 0
    ? total - state.products.coupon.discount
    : total;
};

export default productsSlice.reducer;
