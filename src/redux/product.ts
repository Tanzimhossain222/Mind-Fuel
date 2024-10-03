"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Product {
  _id: string;
  quantity: number;
}

interface ProductState {
  products: Product[];
}

const initialState: ProductState = {
  products: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },

    addToCart: (state, action: PayloadAction<Product>) => {
      const item = state.products.find(
        (item) => item._id === action.payload._id
      );
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
    },

    resetCart: (state) => {
      state.products = [];
    },

    increaseQuantity: (state, action: PayloadAction<Product>) => {
      const item = state.products.find(
        (item) => item._id === action.payload._id
      );
      if (item) {
        item.quantity += action.payload.quantity;
      }
    },

    decreaseQuantity: (state, action: PayloadAction<Product>) => {
      const item = state.products.find(
        (item) => item._id === action.payload._id
      );
      if (item) {
        item.quantity -= action.payload.quantity;
      }
    },

    deleteItem: (state, action: PayloadAction<Product>) => {
      state.products = state.products.filter(
        (item) => item._id !== action.payload._id
      );
    },
  },
});

