import React from 'react'
import { postAPI } from './../services/postService';
import Post from './Post';

//refetch - вызов запроса на сервер
const PostList = () => {
    // const {data: posts, error, isLoading, refetch} = postAPI.useFetchAllPostsQuery(10, {
    //     pollingInterval: 1000 -- таймер запроса (раз в 1000мс отправляется запрос)
    // })
    const {data: posts, error, isLoading, refetch} = postAPI.useFetchAllPostsQuery(10)
    if(error) return <h1>Ошибка</h1>
  return (
    <div>
        {isLoading && <h1>Идет загрузка...</h1>}
        {posts?.map(post=> <Post key={post.id} post={post} />)}
    </div>
  )
}

export default PostList