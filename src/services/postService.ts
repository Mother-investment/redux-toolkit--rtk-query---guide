import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IPost } from '../models/IPost'

// RTK query
// при создании нескольких одинаковых запросов, даже в разных файлах - выполняться будет только 1
export const postAPI = createApi({
    reducerPath: 'postAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com'}),
    tagTypes: ['Post'], // тэги
    endpoints: (build) => ({
        fetchAllPosts: build.query<IPost[], number>({
            query: (limit: number = 10)=>({
                url: '/posts',
                params: {
                    _limit: limit
                }
            }),
            providesTags: result => ['Post'] // providesTags говорит, что fetchAllPosts работает с тегом ['Post']
        }),
        // -----------------добавить пост-------------------------
        // createPost: build.mutation<IPost, IPost>({
        //     query: (post) => ({
        //         url: '/posts',
        //         method: 'POST',
        //         body: post
        //     }).
        //     invalidatesTags: ['Post] // invalidatesTags говорит, что после выполнения createPost, ['Post'] не актуален. Чтобы бновить страницу 
        // }) ---> PostList
        // -----------------------изменить пост-------------------------
        // createPost: build.mutation<IPost, IPost>({
        //     query: (post) => ({
        //         url: '/posts/${post.id}',
        //         method: 'PUT',
        //         body: post
        //     }).
        //     invalidatesTags: ['Post]
        // -----------------------удалить пост-------------------------
        // createPost: build.mutation<IPost, IPost>({
        //     query: (post) => ({
        //         url: '/posts/${post.id}',
        //         method: 'DELETE'
        //     }).
        //     invalidatesTags: ['Post]
    })
})