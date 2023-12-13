import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Product } from "../../interfaces/Product.interface";

export const pawnshopApi = createApi({
  reducerPath: "pawnshopApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com" }),
  endpoints: (builder) => ({
    getAllProducts: builder.query<Product[], void>({
      query: () => "products",
    }),
    getProductById: builder.query<Product, number>({
      query: (id) => `products/${id}`,
    }),
    getAllCategories: builder.query<string[], void>({
      query: () => "products/categories",
    }),
  }),
});

export const { useGetAllProductsQuery, useGetProductByIdQuery, useGetAllCategoriesQuery } = pawnshopApi;