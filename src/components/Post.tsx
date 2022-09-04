import React from 'react'
import { IPost } from './../models/IPost';

interface PostProps {
    post: IPost
}

const Post: React.FC<PostProps> = ({post}) => {
  return (
    <div className='post'>
        <h1 className="post__id">{post.id}</h1>
        <h1 className="post__title">{post.title}</h1>
        <p className="post__body">{post.body}</p>
    </div>
  )
}

export default Post