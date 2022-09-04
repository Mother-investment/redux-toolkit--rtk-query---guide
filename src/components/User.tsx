import React from 'react'
import { IUser } from '../models/IUser'

interface UserProps extends IUser {

}

const User: React.FC<UserProps> = ({id, name, username, email, phone, website, address}) => {
  return (
    <div className='user'>
        <div className="user__title">
            <h1 className='user__id'>{id}</h1>
            <h1 className='user__name'>{name}</h1>
            <h2 className="user__nickname">{username}</h2>
        </div>
        <div className="user__subtitle">
            <h4 className="user__email">{email}</h4>
            <h4 className="user__phone">{phone}</h4>
            <h4 className='user__website'>{website}</h4>
            <div className="user__address">
                <p className="user__city">{address.city}</p>
                <p className="user__street">{address.street}</p>
                <p className="user__suite">{address.suite}</p>
            </div>
        </div>
    </div>
  )
}

export default User