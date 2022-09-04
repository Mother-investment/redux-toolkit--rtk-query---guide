import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IPost } from '../models/IPost'

// RTK query
// при создании нескольких одинаковых запросов, даже в разных файлах - выполняться будет только 1
export const postAPI = createApi({
    reducerPath: 'postAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com'}),
    endpoints: (build) => ({
        fetchAllPosts: build.query<IPost[], number>({
            query: (limit: number = 10)=>({
                url: '/posts',
                params: {
                    _limit: limit
                }
            })
        })
    })
})