import React, { useEffect, useState } from 'react'
import { fetchUsers, userSlice } from '../store/reducers/userSlice';
import { useAppDispatch, useAppSelector } from './../hooks/redux';
import User from './User';

const UserList: React.FC = () => {
    const {error, users, isLoading} = useAppSelector(state => state.user)
    const {} = userSlice.actions
    const dispatch = useAppDispatch()

    useEffect(()=> {
        dispatch(fetchUsers())
    }, [dispatch])

    if(error) return <h1>{error}</h1>

  return (
    <div>
      {isLoading && <h1>Пользователи загружаются...</h1>}
      {users.map(e=><User key={e.id} {...e} />)}
    </div>
  )
}

export default UserList