import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const pawnshopApi = createApi({
  reducerPath: "pawnshopApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com/products" }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "products",
    }),
    getProductById: builder.query({
      query: (id) => `products/${id}`,
    }),
  }),
});

export const { useGetAllProductsQuery, useGetProductByIdQuery } = pawnshopApi;