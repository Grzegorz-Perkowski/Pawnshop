import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IProduct } from "products-types";

export const shopApi = createApi({
  reducerPath: "shopApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com" }),
  endpoints: (builder) => ({
    getAllProducts: builder.query<IProduct[], void>({
      query: () => "products",
    }),
    getProductById: builder.query<IProduct, number>({
      query: (id) => `products/${id}`,
    }),
    getAllCategories: builder.query<string[], void>({
      query: () => "products/categories",
    }),
  }),
});

export const { useGetAllProductsQuery, useGetProductByIdQuery, useGetAllCategoriesQuery } = shopApi;
export const shopApiReducer = {
  [shopApi.reducerPath]: shopApi.reducer,
}