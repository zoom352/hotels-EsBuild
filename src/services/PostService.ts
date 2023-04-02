import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {IHotel} from "../models/IHotel";

export const hotelAPI = createApi({
    reducerPath: 'hotelAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'http://engine.hotellook.com/api/v2/lookup.json'}),
    tagTypes: ['Hotel'],
    endpoints: (build) => ({
        fetchAllHotels: build.query<IHotel[], IHotel>({
            query: (arg) => {
                const {query, lang, lookFor, limit}: any = arg
                return {
                    url: ``,
                        params: {query, lang, lookFor, limit}
                }
            },
            providesTags: result => ['Hotel']
        }),
        // createPost: build.mutation<IPost, IPost>({
        //     query: (post) => ({
        //         url: `/posts`,
        //         method: 'POST',
        //         body: post
        //     }),
        //     invalidatesTags: ['Post']
        // }),
        // updatePost: build.mutation<IPost, IPost>({
        //     query: (post) => ({
        //         url: `/posts/${post.id}`,
        //         method: 'PUT',
        //         body: post
        //     }),
        //     invalidatesTags: ['Post']
        // }),
        // deletePost: build.mutation<IPost, IPost>({
        //     query: (post) => ({
        //         url: `/posts/${post.id}`,
        //         method: 'DELETE',
        //     }),
        //     invalidatesTags: ['Post']
        // }),
    })
})
