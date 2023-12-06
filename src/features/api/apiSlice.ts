import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

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
  }),
});

export const { useGetAllProductsQuery, useGetProductByIdQuery } = pawnshopApi;