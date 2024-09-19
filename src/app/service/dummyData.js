import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
    reducerPath: "products",
    baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
    endpoints: (builder) => ({
        //get all products (Reading the data (query))
        getAllProduct: builder.query({
            query: () => '/products'
        }),
        getProductById: builder.query({
            query: (id) => `/product/${id}`
        }),
        addNewProduct:builder.mutation({
            query:(newProduct)=>({
                url:`/product/add`,
                method:"POST",
                headers:{"Content-Type":"Application/json"},
                body:newProduct,
            })
        }),
        updateProduct:builder.mutation({
            query:({id , updatedProduct}) =>({
                url:`product/${id}`,
                method:"PUT",
                headers:{"Content-Type":"Application/json"},
                body:updatedProduct
            })
        }),
        deleteProduct:builder.mutation({
            query:(id)=>({
                url:`/product/${id}`,
                method:"DELETE"
            })
        })
    })
})

export const {useDeleteProductMutation , useUpdateProductMutation ,  useAddNewProductMutation, useGetAllProductQuery, useGetProductByIdQuery } = productsApi; 